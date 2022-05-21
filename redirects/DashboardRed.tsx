import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Dashboard from '../components/dashboard/Dashboard';
import axios from 'axios';
import links from '../config/links';
import Auth from '../auth/Auth';

interface DashboardRedProps {
  foods?: any;
}

const DashboardRed: React.FC<DashboardRedProps> = ({ foods }) => {
  const [userDetails, setUserDetails] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    let currentUser: any = {};
    const user: any = Auth.getCurrentUser();
    if (!user) router.push('/login');
    const getUserDetails = async () => {

      if (user) {
        await axios
          .get(`${links.default}/user/${user.user?.user_id}`)
          .then((data) => setUserDetails(data.data))
          .catch((err) => console.log(err));
        return currentUser;
      }
    };

    getUserDetails();
  }, []);
  return (
    <>
      <Dashboard user={userDetails} foods={foods} />
    </>
  );
};

export default DashboardRed;
