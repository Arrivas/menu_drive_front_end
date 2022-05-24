import { useState, useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import RadioSelectPayment from './RadioSelectPayment';
import RadioOrderType from './RadioOrderType';
import axios from 'axios';
import links from '../../config/links';
import PayPal from './PayPal';
import AuthContext from '../../context/AuthContext';

interface PaymentModalProps {
  isOpen: boolean;
  setIsOpen: (condition: boolean) => any;
  radioValue: any;
  setRadioValue: (value: string) => any;
  orderType: string;
  setOrderType: (order: string) => any;
  cartItemsData: any;
  user: any;
  cartTotal: number;
  userName: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  setIsOpen,
  radioValue,
  setRadioValue,
  orderType,
  setOrderType,
  cartItemsData,
  user,
  cartTotal,
  userName,
}) => {
  const { userPayment, setUserPayment } = useContext(AuthContext);
  const [status, setStatus] = useState<any>('');
  const router = useRouter();
  const handlePayNow = async () => {
    const cartItems = [...cartItemsData];
    const foodOrders: any = cartItems.map((item: any) => {
      const obj = {
        name: item.name,
        qty: item.qty,
        orderType,
        img: item.img,
        price: item.price,
      };
      return obj;
    });
    if (radioValue === 'Cash') {
      // call backend
      await axios
        .post(`${links.default}/order/${user?.user_id}`, {
          foodOrders,
          orderDate: new Date().toLocaleString(),
        })
        .then(async (data) => {
          setStatus(data.status);
          console.log(data.status);
          // call Back-end to pay order
          await axios
            .put(`${links.default}/order/pay/${user?.user_id}`)
            .then((data) => {
              console.log(data.status);
              // redirect user if success
              router.push('/payment/success');
              setUserPayment({
                details: { name: userName },
                amount: cartTotal,
              });
            })
            .catch((err) => {
              setStatus(err.response.status);
              console.log(
                err.response.data.error || err.response.data.message || err
              );
              toast.error(
                err.response.data.error || err.response.data.message || ''
              );
            });
        })
        .catch((err) => {
          setStatus(err.response.status);
          console.log(
            err.response.data.error || err.response.data.message || err
          );
          toast.error(
            err.response.data.error || err.response.data.message || ''
          );
        });
      if (status > 200) {
        // redirect User if failed
        router.push('/payment/failed');
        setUserPayment({ details: { name: userName }, amount: cartTotal });
      }
    }
  };
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="relative z-50 font-roboto"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded-xl bg-white">
          <Dialog.Title className="font-extrabold text-center text-2xl pt-5 text-gray-800">
            Complete your order
          </Dialog.Title>
          {/* order type */}
          <RadioOrderType orderType={orderType} setOrderType={setOrderType} />
          {/* payment method */}
          <RadioSelectPayment
            radioValue={radioValue}
            setRadioValue={setRadioValue}
          />
          <div className="flex flex-col mx-auto py-5 w-[90%]">
            {radioValue === 'PayPal' ? (
              <PayPal
                userId={user?.user_id}
                amount={cartTotal.toFixed(2)}
                orderType={orderType}
                cartItemsData={cartItemsData}
              />
            ) : (
              <button
                onClick={handlePayNow}
                className={`${
                  radioValue === 'PayPal'
                    ? 'bg-[#f6be38] text-gray-100'
                    : 'bg-green-400 text-gray-100'
                } py-3 rounded-md font-bold`}
                type="button"
              >
                place order
              </button>
            )}

            <button
              className="mt-1 rounded-md font-bold hover:text-gray-600 bg-gray-300 text-gray-800 py-3"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              cancel
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PaymentModal;
