import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface AuthContextType {
  user?: any;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);

  const signIn = (user: string, callback: VoidFunction) => {
    setUser(user);
    callback();
  };

  const signOut = (callback: VoidFunction) => {
    callback();
  };

  const providerValue = useMemo(() => ({ user, signIn, signOut }), [user]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuth };
