import OrdersComponent from '../components/orders/OrdersComponent';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCurrentUser } from '../auth/Auth';
import axios from 'axios';
import links from '../config/links';

interface OrdersRedProps {}

const OrdersRed: React.FC<OrdersRedProps> = () => {
  const [user, setUser] = useState<any>({});
  const [userDetails, setUserDetails] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    const user: any = getCurrentUser();
    setUser(user);
    if (!user) router.push('/login');
    axios
      .get(`${links.default}/user/${user?.user?.user_id}`)
      .then((data) => setUserDetails(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <OrdersComponent
        user={user?.user}
        orderHistory={userDetails.orderHistory}
      />
    </>
  );
};

export default OrdersRed;
