-- Track whether we've sent a "no child added" onboarding reminder to new users
-- Run this in the Supabase SQL editor

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS no_child_reminder_sent_at TIMESTAMPTZ DEFAULT NULL;
