-- Performance indexes
-- children(parent_id): every RLS policy on assessments, sessions, questions, results, internship_profiles
-- runs WHERE parent_id = auth.uid() — without this index every request does a sequential scan.
CREATE INDEX IF NOT EXISTS idx_children_parent_id ON children(parent_id);

-- children(student_user_id): internship RLS uses OR student_user_id = auth.uid()
CREATE INDEX IF NOT EXISTS idx_children_student_user_id ON children(student_user_id);

-- assessments(child_id): RLS subquery joins assessments → children; covers the FK side
CREATE INDEX IF NOT EXISTS idx_assessments_child_id ON assessments(child_id);

-- results(child_id): RLS policy and recommendations/admin queries filter by child_id
CREATE INDEX IF NOT EXISTS idx_results_child_id ON results(child_id);

-- personality_assessments(parent_id): RLS for the entire personality assessment flow
CREATE INDEX IF NOT EXISTS idx_personality_assessments_parent_id ON personality_assessments(parent_id);

-- internship_profiles(child_id): RLS on internship_profiles subqueries children by child_id
CREATE INDEX IF NOT EXISTS idx_internship_profiles_child_id ON internship_profiles(child_id);

-- questions(subject, difficulty): adaptive question fetch queries filter by both columns
CREATE INDEX IF NOT EXISTS idx_questions_subject_difficulty ON questions(subject, difficulty);

-- internship_profiles(cohort_id): admin cohort filtering and assignment queries
CREATE INDEX IF NOT EXISTS idx_internship_profiles_cohort_id ON internship_profiles(cohort_id);
