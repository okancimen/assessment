-- University Work Experience / Fellowship migration
-- Run this in the Supabase SQL editor after migration_internship_schema.sql

-- 1. Extend assessment_type to include university fellowship type
ALTER TABLE assessments DROP CONSTRAINT IF EXISTS assessments_assessment_type_check;
ALTER TABLE assessments ADD CONSTRAINT assessments_assessment_type_check
  CHECK (assessment_type IN ('academic', 'internship', 'internship_university'));

-- 2. University applicant profiles table
CREATE TABLE IF NOT EXISTS university_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE UNIQUE NOT NULL,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE NOT NULL,
  university_name TEXT NOT NULL,
  year_group TEXT NOT NULL CHECK (year_group IN ('Year 1', 'Year 2', 'Placement Year', 'Final Year')),
  track_preference TEXT NOT NULL,
  personal_statement TEXT,
  cohort_id UUID REFERENCES cohorts(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. RLS for university_profiles
ALTER TABLE university_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Student reads own university profile" ON university_profiles;
CREATE POLICY "Student reads own university profile" ON university_profiles
  USING (
    child_id IN (
      SELECT id FROM children WHERE student_user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Student inserts own university profile" ON university_profiles;
CREATE POLICY "Student inserts own university profile" ON university_profiles
  WITH CHECK (
    child_id IN (
      SELECT id FROM children WHERE student_user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Admins manage university profiles" ON university_profiles;
CREATE POLICY "Admins manage university profiles" ON university_profiles
  USING ((SELECT is_admin FROM profiles WHERE id = auth.uid()));

-- 4. Children: allow null parent_id (university students have no parent record)
-- The existing schema already allows nullable parent_id — no change needed.
-- Confirm: children.parent_id is nullable (no NOT NULL constraint).
