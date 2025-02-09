import { createClient } from '@supabase/supabase-js';

// // Create a Supabase client
const supabaseUrl = import.meta.env.VITE_APP_SUPA_BASE_URL;
const supabaseKey = import.meta.env.VITE_APP_SUPA_KEY;
const supabase = createClient(supabaseUrl, supabaseKey,    
    {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
);
// const dispatch = useDispatch();

export const subscribeAuthChange = ( onAuthChange) => {
    return supabase.auth.onAuthStateChange(onAuthChange);
}

export default supabase;