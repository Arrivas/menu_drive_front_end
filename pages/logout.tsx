import { useEffect } from 'react';

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
  useEffect(() => {
    localStorage.clear();
    window.location.replace('/login');
  }, []);
  return <></>;
};

export default Logout;
