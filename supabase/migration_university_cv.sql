-- Add CV upload support to university_profiles
-- Run after migration_university_schema.sql

ALTER TABLE university_profiles ADD COLUMN IF NOT EXISTS cv_url TEXT;

-- Storage bucket for fellowship CVs
-- Create the bucket in the Supabase dashboard (Storage → New bucket):
--   Name: fellowship-cvs
--   Public: true  (so URLs are accessible without a signed token)
--
-- Then run these policies:

INSERT INTO storage.buckets (id, name, public)
VALUES ('fellowship-cvs', 'fellowship-cvs', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Authenticated users can upload their own CV" ON storage.objects;
CREATE POLICY "Authenticated users can upload their own CV" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'fellowship-cvs' AND (storage.foldername(name))[1] = auth.uid()::text);

DROP POLICY IF EXISTS "Authenticated users can update their own CV" ON storage.objects;
CREATE POLICY "Authenticated users can update their own CV" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'fellowship-cvs' AND (storage.foldername(name))[1] = auth.uid()::text);

DROP POLICY IF EXISTS "Public CV read access" ON storage.objects;
CREATE POLICY "Public CV read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'fellowship-cvs');
