import { createBrowserClient } from "@supabase/ssr";

/** Browser client — publishable key only, never the service role key. */
export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
