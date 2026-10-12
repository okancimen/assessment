-- Store geolocation for guest (no-login) personality assessments.
-- Mirrors guest_country/guest_city on the academic `assessments` table so the
-- admin guest table can show a location for personality guests too.
-- Existing rows stay NULL.

ALTER TABLE personality_assessments
  ADD COLUMN IF NOT EXISTS guest_country TEXT,
  ADD COLUMN IF NOT EXISTS guest_city    TEXT;
