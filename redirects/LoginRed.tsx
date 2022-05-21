import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import LoginComponent from '../components/login/LoginComponent';
import Auth from '../auth/Auth';

interface LoginRedProps {}

const LoginRed: React.FC<LoginRedProps> = () => {
  const router = useRouter();
  const user: any = Auth.getCurrentUser();
  useEffect(() => {
    if (user) router.push('/');
  }, []);
  return (
    <>
      <LoginComponent user={user} />
    </>
  );
};

export default LoginRed;
