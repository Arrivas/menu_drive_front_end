import { useContext, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useRouter } from 'next/router';
import links from '../../config/links';
import toast from 'react-hot-toast';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
interface PaypalProps {
  amount: any;
  orderType: any;
  cartItemsData: any;
  userId: string;
}

const Paypal: React.FC<PaypalProps> = ({
  amount,
  cartItemsData,
  orderType,
  userId,
}) => {
  const router = useRouter();
  const [status, setStatus] = useState<any>(500);
  const { userPayment, setUserPayment } = useContext(AuthContext);
  return (
    <div className="relative">
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={async (data: any, actions: any) => {
          return await actions.order.capture().then(async (details: any) => {
            // call backend
            const cartItems = [...cartItemsData];
            const foodOrders = cartItems.map((item: any) => {
              const obj = {
                name: item.name,
                qty: item.qty,
                orderType,
                img: item.img,
                price: item.price,
              };
              return obj;
            });
            await axios
              .post(`${links.default}/order/${userId}`, {
                foodOrders,
                orderDate: new Date().toLocaleString(),
              })
              .then(async (data) => {
                setStatus(data.status);
                console.log(data.status);
                // call back-end
                await axios
                  .put(`${links.default}/order/pay/${userId}`)
                  .then((data) => {
                    console.log(data.status);
                    setStatus(data.status);
                  })
                  .catch((err) => {
                    console.log(
                      err.response.data.error ||
                        err.response.data.message ||
                        err
                    );
                    toast.error(
                      err.response.data.error || err.response.data.message || ''
                    );
                  });
                // redirect User if success
                router.push('/payment/success');
                setUserPayment({ details: details.payer, amount });
              })
              .catch((err) => {
                console.log(
                  err.response.data.error || err.response.data.message || err
                );
                toast.error(
                  err.response.data.error || err.response.data.message || ''
                );
              });
            if (status > 200 || status !== '') {
              // redirect User if failed
              router.push('/payment/failed');
              setUserPayment({ details: details.payer, amount });
            }
          });
        }}
        onError={(err) => console.log(err)}
      />
    </div>
  );
};

export default Paypal;
