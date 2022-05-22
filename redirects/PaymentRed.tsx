import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCurrentUser } from '../auth/Auth';
import PaymentSucess from '../components/cart/PaymentSucess';

interface PaymentRedProps {}

const PaymentRed: React.FC<PaymentRedProps> = () => {
  const router = useRouter();
  useEffect(() => {
    const getUser: any = getCurrentUser();
    if (!getUser) router.push('/login');
  }, []);
  return (
    <>
      <PaymentSucess />
    </>
  );
};

export default PaymentRed;
