import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCurrentUser } from '../auth/Auth';
import PaymentFailed from '../components/cart/PaymentFailed';

interface PaymentRedFailedProps {}

const PaymentRedFailed: React.FC<PaymentRedFailedProps> = () => {
  const router = useRouter();
  useEffect(() => {
    const getUser: any = getCurrentUser();
    if (!getUser) router.push('/login');
  }, []);
  return (
    <>
      <PaymentFailed />
    </>
  );
};

export default PaymentRedFailed;
