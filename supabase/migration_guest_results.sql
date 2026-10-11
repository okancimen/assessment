-- Allow guest assessments to have results without a child_id
ALTER TABLE results ALTER COLUMN child_id DROP NOT NULL;
