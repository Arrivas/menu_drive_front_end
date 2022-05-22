import links from '../../config/links';
import { useContext } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useRouter } from 'next/router';
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
            // call backend
            await axios
              .post(`${links.default}/order/${userId}`, { foodOrders })
              .then((data) => console.log(data.data))
              .catch((err) =>
                console.log(
                  err.response.data.error || err.response.data.message || err
                )
              );
            await axios
              .put(`${links.default}/order/pay/${userId}`)
              .then((data) => console.log(data.data))
              .catch((err) =>
                console.log(
                  err.response.data.error || err.response.data.message || err
                )
              );
            // redirect User
            router.push('/payment/success');
            setUserPayment({ details: details.payer, amount });
          });
        }}
        onError={(err) => console.log(err)}
      />
    </div>
  );
};

export default Paypal;
