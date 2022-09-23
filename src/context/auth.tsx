import { Session, User } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';
import useSupabaseAuth from 'src/hooks/useSupabaseAuth';

interface AuthContext {
    session: Session | null;
    user: User | undefined;
    authLoading: boolean;
}

const AuthContext = createContext<AuthContext>({
    session: null,
    user: undefined,
    authLoading: false
});

interface AuthProviderProps {
    children: React.ReactFragment,
}

export const AuthProvider = ({children}:AuthProviderProps) => {
    const authValue = useSupabaseAuth();
    return <AuthContext.Provider value={authValue}>
        {children}
    </AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);