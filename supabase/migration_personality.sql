-- Personality / strengths assessment tables
-- Run in the Supabase SQL editor

CREATE TABLE IF NOT EXISTS personality_assessments (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id    UUID REFERENCES children(id) ON DELETE CASCADE NOT NULL,
  parent_id   UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  status      TEXT NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed')),
  age_tier    INTEGER NOT NULL CHECK (age_tier BETWEEN 1 AND 4),
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS personality_answers (
  id             UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id  UUID REFERENCES personality_assessments(id) ON DELETE CASCADE NOT NULL,
  question_key   TEXT NOT NULL,
  score          INTEGER NOT NULL CHECK (score BETWEEN 1 AND 5),
  answered_at    TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(assessment_id, question_key)
);

CREATE TABLE IF NOT EXISTS personality_results (
  id             UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id  UUID REFERENCES personality_assessments(id) ON DELETE CASCADE UNIQUE NOT NULL,
  trait_scores   JSONB NOT NULL,
  top_strengths  TEXT[] NOT NULL,
  growth_areas   TEXT[] NOT NULL,
  ai_summary     TEXT,
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE personality_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE personality_answers     ENABLE ROW LEVEL SECURITY;
ALTER TABLE personality_results     ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Parents manage own personality assessments" ON personality_assessments
  FOR ALL USING (parent_id = auth.uid()) WITH CHECK (parent_id = auth.uid());

CREATE POLICY "Parents manage own personality answers" ON personality_answers
  FOR ALL USING (
    assessment_id IN (SELECT id FROM personality_assessments WHERE parent_id = auth.uid())
  )
  WITH CHECK (
    assessment_id IN (SELECT id FROM personality_assessments WHERE parent_id = auth.uid())
  );

CREATE POLICY "Parents read own personality results" ON personality_results
  FOR SELECT USING (
    assessment_id IN (SELECT id FROM personality_assessments WHERE parent_id = auth.uid())
  );
