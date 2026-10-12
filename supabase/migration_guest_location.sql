-- Store geolocation for guest (no-login) assessments.
-- Captured from the guest's request IP at assessment start (same source as the
-- country/city shown for registered users). Existing rows stay NULL.

ALTER TABLE assessments
  ADD COLUMN IF NOT EXISTS guest_country TEXT,
  ADD COLUMN IF NOT EXISTS guest_city    TEXT;
