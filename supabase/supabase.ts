import {SupabaseClient} from 'https://esm.sh/@supabase/supabase-js@2.12.1'
import { ENV } from '../env/env.ts';

export function Anon(): SupabaseClient<any, "auth", any> {
    return new SupabaseClient(ENV.url,ENV.anon_key,{
        auth: {
            persistSession: false
        }
    });
}

export const ANON = Anon()