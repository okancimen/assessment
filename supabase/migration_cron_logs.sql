create table if not exists cron_logs (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  job         text not null,
  submitted   int not null default 0,
  total       int not null default 0,
  failed      int not null default 0,
  errors      jsonb,
  duration_ms int,
  is_sunday   boolean not null default false
);

alter table cron_logs enable row level security;

-- only service role can read/write
create policy "service role only" on cron_logs
  using (false)
  with check (false);
