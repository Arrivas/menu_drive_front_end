import { createContext } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext({
  activeNav: 'Home',
  setActiveNav: (active: string) => {},
  setLoading: (val: any) => {},
  userPayment: {},
  setUserPayment: (val: any) => {},
  setUser: (val: any) => {},
  user: {},
});

export const AuthContextProvider = ({ children }: any) => {
  const [activeNav, setActiveNav] = useState<any>('Home');
  const [userPayment, setUserPayment] = useState<any>({});
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const context = {
    setActiveNav,
    activeNav,
    setUserPayment,
    userPayment,
    loading,
    setLoading,
    setUser,
    user,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
