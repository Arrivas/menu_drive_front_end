import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Auth from '../auth/Auth';
import axios from 'axios';
import links from '../config/links';
import CartComponent from '../components/cart/CartComponent';

interface CartCompRedProps {}

const CartCompRed: React.FC<CartCompRedProps> = () => {
  const [cartItems, setCartItems] = useState<any>([]);
  const [user, setUser] = useState<any>({});
  const router = useRouter();
  useEffect(() => {
    const getUser: any = Auth.getCurrentUser();
    setUser(getUser);
    if (!getUser) router.push('/login');
    if (getUser) {
      const getCartItems = async () => {
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
      <CartComponent user={user} cartItems={cartItems} />
    </>
  );
};

export default CartCompRed;
