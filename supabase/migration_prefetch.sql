ALTER TABLE assessment_sessions ADD COLUMN IF NOT EXISTS prefetched_question JSONB DEFAULT NULL;
