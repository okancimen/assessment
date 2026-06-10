-- Run this in your Supabase SQL editor to set up the database schema from scratch

-- Profiles (extends auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Children (references auth.users directly — no dependency on profiles existing)
CREATE TABLE IF NOT EXISTS children (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Questions (cached AI-generated questions)
CREATE TABLE IF NOT EXISTS questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  subject TEXT NOT NULL CHECK (subject IN ('english', 'mathematics', 'verbal_reasoning', 'nonverbal_reasoning')),
  topic TEXT NOT NULL,
  difficulty INTEGER NOT NULL CHECK (difficulty BETWEEN 1 AND 10),
  age_min INTEGER NOT NULL DEFAULT 7,
  age_max INTEGER NOT NULL DEFAULT 16,
  question_text TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer TEXT NOT NULL,
  explanation TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Assessments
CREATE TABLE IF NOT EXISTS assessments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed')),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Assessment sessions (tracks live state of an in-progress assessment)
CREATE TABLE IF NOT EXISTS assessment_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE UNIQUE NOT NULL,
  current_subject TEXT NOT NULL DEFAULT 'english',
  subject_index INTEGER NOT NULL DEFAULT 0,
  question_index INTEGER NOT NULL DEFAULT 0,
  difficulty_level INTEGER NOT NULL DEFAULT 5,
  subject_scores JSONB NOT NULL DEFAULT '{}',
  completed_subjects TEXT[] NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Assessment questions (questions used in a specific assessment)
CREATE TABLE IF NOT EXISTS assessment_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE NOT NULL,
  question_id UUID REFERENCES questions(id) NOT NULL,
  subject TEXT NOT NULL,
  question_order INTEGER NOT NULL,
  answered_at TIMESTAMPTZ,
  selected_answer TEXT,
  is_correct BOOLEAN,
  time_taken_seconds INTEGER,
  UNIQUE(assessment_id, subject, question_order)
);

-- Results
CREATE TABLE IF NOT EXISTS results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE UNIQUE NOT NULL,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE NOT NULL,
  overall_score INTEGER NOT NULL,
  standardized_score INTEGER NOT NULL,
  subject_scores JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE children ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE results ENABLE ROW LEVEL SECURITY;

-- Profiles
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Children
CREATE POLICY "Parents can manage own children" ON children
  FOR ALL
  USING (parent_id = auth.uid())
  WITH CHECK (parent_id = auth.uid());

-- Assessments
CREATE POLICY "Parents can manage assessments" ON assessments
  FOR ALL
  USING (child_id IN (SELECT id FROM children WHERE parent_id = auth.uid()))
  WITH CHECK (child_id IN (SELECT id FROM children WHERE parent_id = auth.uid()));

-- Assessment sessions
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

-- Assessment questions
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

-- Questions: authenticated users can read and insert (API routes save generated questions)
CREATE POLICY "Authenticated users can read questions" ON questions
  FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert questions" ON questions
  FOR INSERT TO authenticated WITH CHECK (true);

-- Results
CREATE POLICY "Parents can manage results" ON results
  FOR ALL
  USING (child_id IN (SELECT id FROM children WHERE parent_id = auth.uid()))
  WITH CHECK (child_id IN (SELECT id FROM children WHERE parent_id = auth.uid()));

-- Trigger: auto-create profile on signup (robust — never blocks signup)
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

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
