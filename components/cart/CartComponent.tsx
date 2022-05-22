import { useState, useEffect } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import { getCartTotalPrice } from '../../functions/getCartTotalPrice';
import links from '../../config/links';
import axios from 'axios';
import Link from 'next/link';
import CartItems from './CartItems';
import PaymentModal from './PaymentModal';

interface CartComponentProps {
  cartItems?: any;
  user: any;
}

const CartComponent: React.FC<CartComponentProps> = ({ cartItems, user }) => {
  const [cartItemsData, setCartItemsData] = useState<any>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState<string>('Cash');
  const [orderType, setOrderType] = useState<string>('Dine-in');

  useEffect(() => {
    setCartItemsData(cartItems);
    setCartTotal(getCartTotalPrice(cartItems));
  });

  const handleAddQty = (item: any) => {
    console.log(orderType);
    const currentItem = [...cartItemsData];
    const index = currentItem.indexOf(item);
    console.log(radioValue);
    // if (currentItem[index].qty >= 20) return;

    currentItem[index].qty = currentItem[index].qty + 1;
    setCartItemsData(currentItem);
  };
  const handleSubQty = async (item: any) => {
    const currentItem = [...cartItemsData];
    const index = currentItem.indexOf(item);
    // if (currentItem[index].qty <= 1) return;

    currentItem[index].qty = currentItem[index].qty - 1;
    setCartItemsData(currentItem);
    // update the server
    console.log(cartItemsData);
    await axios
      .put(`${links.default}/user/cart/${user?.user.user_id}`, {
        newCartItems: cartItemsData,
      })
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err.response.data.error || err));
  };

  const handleCheckOut = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <>
      <div className="flex justify-center items-center font-roboto">
        <div className="pt-8 h-[550px] w-[375px] xs:h-screen font-roboto relative">
          {/* top items */}
          <div className="flex justify-between w-full px-8 sm:px-0">
            <Link href="/">
              <ChevronLeftIcon
                className="cursor-pointer text-gray-500"
                height={30}
                width={30}
              />
            </Link>
            <h1 className="font-extrabold text-2xl text-gray-500 ">
              Cart Items
            </h1>
          </div>
          {/* mid contents */}
          <div className="flex flex-col gap-5 pt-5 mt-2 pb-3 px-3 overflow-y-auto h-[99%] sm:h-[70%]">
            {cartItemsData.map((item: any) => (
              <CartItems
                key={item.name}
                name={item.name}
                price={item.price}
                handleAddQty={() => handleAddQty(item)}
                handleSubQty={() => handleSubQty(item)}
                img={item.img}
                qty={item.qty}
              />
            ))}
          </div>
          {/* checkout */}
          <div className="fixed sm:absolute px-3 sm:px-0 bottom-5 left-0 w-full">
            {/* total */}
            <div className="flex justify-between px-5 pb-2 text-2xl font-bold">
              <span className="">Total</span>
              <span>
                <span className="font-normal text-[20px]">₱</span>
                {cartTotal}
              </span>
            </div>
            <button
              onClick={handleCheckOut}
              className="w-full text-xl py-3 rounded-2xl bg-black text-gray-300 font-extrabold"
            >
              Checkout
            </button>
            <PaymentModal
              radioValue={radioValue}
              setRadioValue={setRadioValue}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              orderType={orderType}
              setOrderType={setOrderType}
              cartItemsData={cartItemsData}
              userId={user?.user?.user_id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
