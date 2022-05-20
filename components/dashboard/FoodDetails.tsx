import Link from 'next/link';
import links from '../../config/links';
import axios from 'axios'
import { useState } from 'react';
import {
  ChevronLeftIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  ClockIcon,
} from '@heroicons/react/outline';

interface FoodDetailsProps {
  foodData: any;
}

const FoodDetails: React.FC<FoodDetailsProps> = ({ foodData }) => {
  const { img, name, description, price, servingTime } = foodData;
  const [qty, setQty] = useState<number>(1);

  const handleAddQty = () => {
    if (qty >= 20) return;
    setQty(qty + 1);
  };
  const handleSubQty = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
  };

  const handleAddToCart = async() => {
    const foodItem = {
      name,
      qty,
      
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="pt-8 h-[550px] w-[375px] xs:h-screen font-roboto relative">
          <div className="z-50 absolute">
            <Link href="/">
              <ChevronLeftIcon
                className="cursor-pointer"
                height={25}
                width={25}
              />
            </Link>
          </div>
          {/* top image */}
          <div className="grid grid-rows-2 absolute top-0 left-0 h-full w-full">
            <div className="-z-50 flex justify-center items-center">
              <img
                className="object-cover object-center p-5 sm:p-0"
                src={img}
                alt="food"
              />
            </div>
            {/* bottom contents */}
            <div className=" food-detail-shadow px-3 pt-5">
              <hr className=" border-gray-300" />
              <h1 className="font-bold text-2xl pt-5">{name}</h1>
              <p className="text-gray-500">{description}</p>
              {/* + - / price */}
              <div className="flex justify-between items-center pt-5">
                <span className="text-lg">
                  ₱ <span className="font-extrabold text-lg">{price}</span>
                </span>
                <div className="flex justify-between items-center w-[30%]">
                  <button onClick={handleSubQty}>
                    <MinusCircleIcon width={25} height={25} />
                  </button>
                  <span className="font-bold">{qty}</span>
                  <button onClick={handleAddQty}>
                    <PlusCircleIcon width={25} height={25} />
                  </button>
                </div>
              </div>
              {/* serving time */}
              <div className="">
                <p className="text-lg">Serving Time</p>
                <div className="flex items-center font-bold gap-1">
                  <ClockIcon width={28} height={28} />
                  <span>
                    {servingTime} {servingTime >= 1 ? 'mins' : 'min'}
                  </span>
                </div>
              </div>
              {/* add to cart / place order */}
              <div className="flex flex-col sm:flex-row pt-5 gap-2 items-center fixed sm:absolute bottom-5 left-0 w-full">
                <button
                  onClick={handleAddToCart}
                  className="rounded-full w-[90%] sm:w-[80%] font-bold bg-[#3d1c47] text-gray-200 py-3 px-5"
                >
                  Add to Cart
                </button>
                <button className="rounded-full w-[90%] sm:w-[80%] font-bold bg-[#3d1c47] text-gray-200 py-3 px-5">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
