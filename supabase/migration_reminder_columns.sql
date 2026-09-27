-- Add reminder tracking columns to assessments
-- Run this in the Supabase SQL editor

ALTER TABLE assessments
  ADD COLUMN IF NOT EXISTS reminder_sent_at TIMESTAMPTZ DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS reminder_count   INTEGER      DEFAULT 0;
