import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import LoginComponent from '../components/login/LoginComponent';

interface LoginRedProps {}

const LoginRed: React.FC<LoginRedProps> = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (JSON.stringify(user) !== JSON.stringify({}) && user) router.push('/');
  }, []);
  return <LoginComponent />;
};

export default LoginRed;
