import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../context/AuthContext';
import Dashboard from '../components/dashboard/Dashboard';

interface DashboardRedProps {
  foods?: any;
}

const DashboardRed: React.FC<DashboardRedProps> = ({ foods }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (JSON.stringify(user) === JSON.stringify({}) || !user)
      router.push('/login');
  }, []);
  return (
    <>
      <Dashboard user={user} foods={foods} />
    </>
  );
};

export default DashboardRed;
