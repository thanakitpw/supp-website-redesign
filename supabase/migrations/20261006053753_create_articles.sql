-- Applied to project czqlzbjhkuiaqdowrwzf via Supabase MCP on 2026-10-06.
create table public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null,
  seo_title text,
  seo_description text,
  excerpt text,
  content_md text not null,
  cover_url text,
  cover_alt text,
  category text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint published_needs_date check (status <> 'published' or published_at is not null)
);

comment on table public.articles is 'Blog posts rendered at /blog/[slug]. slug is English; old Thai-encoded WP slugs 301 via migration/redirect-map.csv.';

create index articles_status_published_at_idx on public.articles (status, published_at desc);
create index articles_category_idx on public.articles (category);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger articles_set_updated_at
before update on public.articles
for each row execute function public.set_updated_at();

alter table public.articles enable row level security;

-- Public site reads published posts only. No insert/update/delete policies:
-- writes go through the service role on the server, which bypasses RLS.
create policy "Published articles are readable by everyone"
on public.articles for select
to anon, authenticated
using (status = 'published' and published_at <= now());

-- Cover images: public read by URL, images only, 5 MB cap. Uploads use the
-- service role, so no storage.objects write policies are needed.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('blog', 'blog', true, 5242880, array['image/webp', 'image/jpeg', 'image/png', 'image/avif']);
