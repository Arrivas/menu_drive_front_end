import { useState, useEffect } from 'react';
import { getCurrentUser } from '../auth/Auth';
import { useRouter } from 'next/router';
import axios from 'axios';
import links from '../config/links';
import AccountComp from '../components/account/AccountComp';

interface AccountRedProps {}

const AccountRed: React.FC<AccountRedProps> = () => {
  const [user, setUser] = useState<any>({});
  const router = useRouter();
  useEffect(() => {
    const getUser: any = getCurrentUser();
    if (!getUser) router.push('/login');
    console.log(getUser);
    setUser(getUser);
    // const getCartItems = async () => {
    //   await axios
    //     .get(`${links.default}/user/${getUser?.user?.user_id}`)
    //     .then((data) => setUser(data?.data))
    //     .catch((err) => console.log(err.response.data.error || err));

    // };
    // getCartItems();
  }, []);
  return (
    <>
      <AccountComp user={user} />
    </>
  );
};

export default AccountRed;
