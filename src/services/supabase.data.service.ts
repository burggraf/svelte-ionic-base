import { createClient } from '@supabase/supabase-js';

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const VITE_SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY

// console.log('*** auth: createClient ***');
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);


export const saveProfile = async (profile: any) => {
  const { data, error } = 
  await supabase.from('profile').upsert(profile);
  return { data, error}
}
