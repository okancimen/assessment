-- Allow guest (no-login) academic assessments
-- child_id is now nullable; populated when a guest claims their results

ALTER TABLE assessments ALTER COLUMN child_id DROP NOT NULL;

ALTER TABLE assessments
  ADD COLUMN IF NOT EXISTS guest_token TEXT,
  ADD COLUMN IF NOT EXISTS guest_name  TEXT,
  ADD COLUMN IF NOT EXISTS guest_age   INTEGER;

CREATE INDEX IF NOT EXISTS idx_assessments_guest_token ON assessments(guest_token);
