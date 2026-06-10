-- Run this in Supabase SQL Editor to fix all known issues

-- Fix 1: Robust trigger with exception handling + conflict guard
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name')
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
EXCEPTION WHEN OTHERS THEN
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fix 2: Children FK → auth.users (not profiles, so child creation never depends on profile existing)
ALTER TABLE children DROP CONSTRAINT IF EXISTS children_parent_id_fkey;
ALTER TABLE children ADD CONSTRAINT children_parent_id_fkey
  FOREIGN KEY (parent_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Fix 3: Backfill profiles for any users who signed up before the trigger was fixed
INSERT INTO profiles (id, email, full_name)
SELECT id, email, raw_user_meta_data->>'full_name'
FROM auth.users
ON CONFLICT (id) DO NOTHING;

-- Fix 4: assessment_sessions — add WITH CHECK so inserts work
DROP POLICY IF EXISTS "Parents can manage sessions" ON assessment_sessions;
CREATE POLICY "Parents can manage sessions" ON assessment_sessions
  FOR ALL
  USING (assessment_id IN (
    SELECT a.id FROM assessments a
    JOIN children c ON a.child_id = c.id
    WHERE c.parent_id = auth.uid()
  ))
  WITH CHECK (assessment_id IN (
    SELECT a.id FROM assessments a
    JOIN children c ON a.child_id = c.id
    WHERE c.parent_id = auth.uid()
  ));

-- Fix 5: assessment_questions — add WITH CHECK so inserts work
DROP POLICY IF EXISTS "Parents can manage assessment questions" ON assessment_questions;
CREATE POLICY "Parents can manage assessment questions" ON assessment_questions
  FOR ALL
  USING (assessment_id IN (
    SELECT a.id FROM assessments a
    JOIN children c ON a.child_id = c.id
    WHERE c.parent_id = auth.uid()
  ))
  WITH CHECK (assessment_id IN (
    SELECT a.id FROM assessments a
    JOIN children c ON a.child_id = c.id
    WHERE c.parent_id = auth.uid()
  ));

-- Fix 6: questions — allow authenticated users to insert (API routes save generated questions)
DROP POLICY IF EXISTS "Authenticated users can read questions" ON questions;
CREATE POLICY "Authenticated users can read questions" ON questions
  FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert questions" ON questions
  FOR INSERT TO authenticated WITH CHECK (true);

-- Fix 7: results — add WITH CHECK so upsert in complete route works
DROP POLICY IF EXISTS "Parents can view results" ON results;
CREATE POLICY "Parents can manage results" ON results
  FOR ALL
  USING (child_id IN (SELECT id FROM children WHERE parent_id = auth.uid()))
  WITH CHECK (child_id IN (SELECT id FROM children WHERE parent_id = auth.uid()));
