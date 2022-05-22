import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import OrdersRed from '../redirects/OrdersRed';

interface OrdersProps {}

const Orders: React.FC<OrdersProps> = () => {
  const { setActiveNav } = useContext(AuthContext);
  useEffect(() => {
    setActiveNav('Orders');
  }, []);
  return (
    <>
      <OrdersRed />
    </>
  );
};

export default Orders;
