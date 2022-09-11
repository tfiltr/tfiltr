// src/server/db/client.ts
//import { PrismaClient } from "@prisma/client";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { env } from "../../env/server.mjs";

declare global {
  // eslint-disable-next-line no-var
  var supabase: SupabaseClient | undefined;
}

export const supabase: SupabaseClient = global.supabase ||  createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

if (env.NODE_ENV !== "production") {
  global.supabase = supabase;
}
