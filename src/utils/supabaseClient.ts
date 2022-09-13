import {createClient} from '@supabase/supabase-js';
import {Database} from 'supabase/types';
import {env} from 'src/env/client.mjs';

export const supabase = createClient<Database>(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
