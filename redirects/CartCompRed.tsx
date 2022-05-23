import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCurrentUser } from '../auth/Auth';
import axios from 'axios';
import links from '../config/links';
import CartComponent from '../components/cart/CartComponent';

interface CartCompRedProps {}

const CartCompRed: React.FC<CartCompRedProps> = () => {
  const [cartItems, setCartItems] = useState<any>([]);
  const [user, setUser] = useState<any>({});
  const [userName, setUserName] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const getUser: any = getCurrentUser();

    if (!getUser) router.push('/login');
    setUser(getUser);
    if (getUser) {
      const getCartItems = async () => {
        await axios
          .get(`${links.default}/user/${getUser?.user?.user_id}`)
          .then((data) => setUserName(data?.data?.name))
          .catch((err) => console.log(err.response.data.error || err));
        await axios
          .get(`${links.default}/user/cart/${getUser?.user?.user_id}`)
          .then((data) => setCartItems(data.data))
          .catch((err) => console.log(err.response.data.error || err));
      };
      getCartItems();
    }
  }, []);
  return (
    <>
      <CartComponent user={user} userName={userName} cartItems={cartItems} />
    </>
  );
};

export default CartCompRed;
