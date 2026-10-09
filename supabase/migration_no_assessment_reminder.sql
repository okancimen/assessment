-- Track whether we've sent a "child added but no assessment started" reminder
-- Stored per-child so a parent with multiple children (only some assessed) still gets nudged
-- Run this in the Supabase SQL editor

ALTER TABLE children
  ADD COLUMN IF NOT EXISTS no_assessment_reminder_sent_at TIMESTAMPTZ DEFAULT NULL;
