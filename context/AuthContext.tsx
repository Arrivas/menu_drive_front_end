import { createContext } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Auth from '../auth/Auth';
import axios from 'axios';
import links from '../config/links';

const AuthContext = createContext({
  loginWithEmailPass: (_email: string, _password: string) => {},
  activeNav: 'Home',
  setActiveNav: (active: string) => {},
});

export const AuthContextProvider = ({ children }: any) => {
  const [activeNav, setActiveNav] = useState<any>('Home');
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const loginWithEmailPass = (email: string, password: string) => {
    axios
      .post(`${links.default}/auth`, {
        email: email.trim(),
        password: password,
      })
      .then((res) => {
        setLoading(false);
        localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        const getUser: any = Auth.getCurrentUser();
        router.push('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response.data.message || '');
        // if (error.response.data.path[0] === 'general')
        //   toast.error(error.response.data.message);

        // setErrors(error.response.data);
      });
  };
  const context = { loginWithEmailPass, setActiveNav, activeNav };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
