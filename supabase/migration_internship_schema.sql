-- Internship Assessment Platform migration
-- Run this in the Supabase SQL editor

-- 1. Children: support student self-registration and parent-invite linking
ALTER TABLE children
  ADD COLUMN IF NOT EXISTS student_email TEXT,
  ADD COLUMN IF NOT EXISTS student_user_id UUID REFERENCES auth.users(id),
  ADD COLUMN IF NOT EXISTS invited_at TIMESTAMPTZ;

-- 2. Assessments: internship type flag and retake control
ALTER TABLE assessments
  ADD COLUMN IF NOT EXISTS assessment_type TEXT DEFAULT 'academic'
    CHECK (assessment_type IN ('academic', 'internship')),
  ADD COLUMN IF NOT EXISTS retake_unlocked BOOLEAN DEFAULT false;

-- 3. Admin flag on user profiles
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT false;

-- 4. Results: AI-generated content columns
ALTER TABLE results
  ADD COLUMN IF NOT EXISTS ai_summary TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS phase_insights JSONB DEFAULT NULL;

-- 5. Cohorts table
CREATE TABLE IF NOT EXISTS cohorts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  start_date DATE NOT NULL,
  description TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Internship applicant profiles
CREATE TABLE IF NOT EXISTS internship_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE UNIQUE NOT NULL,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE NOT NULL,
  school_name TEXT NOT NULL,
  year_group TEXT NOT NULL,
  personal_statement TEXT,
  cv_url TEXT,
  track_preferences TEXT[] NOT NULL DEFAULT '{}',
  admin_assigned_track TEXT,
  cohort_id UUID REFERENCES cohorts(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Row-level security for new tables
ALTER TABLE cohorts ENABLE ROW LEVEL SECURITY;
ALTER TABLE internship_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins manage cohorts" ON cohorts;
CREATE POLICY "Admins manage cohorts" ON cohorts
  USING ((SELECT is_admin FROM profiles WHERE id = auth.uid()));

DROP POLICY IF EXISTS "Owners read own internship profile" ON internship_profiles;
CREATE POLICY "Owners read own internship profile" ON internship_profiles
  USING (
    child_id IN (
      SELECT id FROM children
      WHERE parent_id = auth.uid() OR student_user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Owners insert own internship profile" ON internship_profiles;
CREATE POLICY "Owners insert own internship profile" ON internship_profiles
  WITH CHECK (
    child_id IN (
      SELECT id FROM children
      WHERE parent_id = auth.uid() OR student_user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Owners update own internship profile" ON internship_profiles;
CREATE POLICY "Owners update own internship profile" ON internship_profiles
  FOR UPDATE USING (
    child_id IN (
      SELECT id FROM children
      WHERE parent_id = auth.uid() OR student_user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Admins read all internship profiles" ON internship_profiles;
CREATE POLICY "Admins read all internship profiles" ON internship_profiles
  USING ((SELECT is_admin FROM profiles WHERE id = auth.uid()));

DROP POLICY IF EXISTS "Admins update all internship profiles" ON internship_profiles;
CREATE POLICY "Admins update all internship profiles" ON internship_profiles
  FOR UPDATE USING ((SELECT is_admin FROM profiles WHERE id = auth.uid()));

-- 8. Remove the questions.subject CHECK constraint so internship subjects can be stored
--    (PG auto-names inline CHECK constraints as <table>_<column>_check)
ALTER TABLE questions DROP CONSTRAINT IF EXISTS questions_subject_check;
