-- Guest reminder email capture
-- Stores the email a guest provides on the break screen "Finish another time" panel

alter table assessments
  add column if not exists guest_email       text,
  add column if not exists reminder_sent_at  timestamptz;
