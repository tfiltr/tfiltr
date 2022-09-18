import { Session } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

import supabase from 'src/utils/supabaseClient';

const useSupabaseAuth = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [session, setSession] = useState<Session | null>(null);


    useEffect(() => {
        let mounted = true;

        async function getInitialSession() {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            // only update the react state if the component is still mounted
            if (mounted) {
                if (session) {
                    setSession(session);
                }

                setIsLoading(false);
            }
        }

        getInitialSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );

        return () => {
            mounted = false;
            subscription?.unsubscribe();
        };
    });

    return {
        session,
        user: session?.user,
        authLoading: isLoading
    };
};

export default useSupabaseAuth;