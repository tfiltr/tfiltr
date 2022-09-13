// src/server/db/client.ts
import {createClient, SupabaseClient} from '@supabase/supabase-js';
import {Database} from 'supabase/types';
import {env} from 'src/env/server.mjs';

declare global {
  // eslint-disable-next-line no-var
  var supabase: SupabaseClient<Database> | undefined;
}

export const supabase: SupabaseClient<Database>  = global.supabase ||  createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

if (env.NODE_ENV !== 'production') {
  global.supabase = supabase;
}
