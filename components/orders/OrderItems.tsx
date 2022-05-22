import { ClockIcon } from '@heroicons/react/outline';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';

interface OrderItemsProps {
  name: string;
  servingTime: string;
  paidStatus: string;
  img: string;
  paid: boolean;
}

const OrderItems: React.FC<OrderItemsProps> = ({
  name,
  servingTime,
  paidStatus,
  img,
  paid,
}) => {
  return (
    <>
      <div className="shadow-md border-x border-gray-300 flex justify-between items-center px-3 rounded-2xl">
        <div className="w-[20%]">
          <img
            className="w-full sm:inline xxs:hidden h-[2.8rem] object-cover object-center"
            src={img}
            alt="food"
          />
        </div>
        {/* text middle */}
        <div className="flex flex-col p-2">
          <h1 className="text-xl font-extrabold break-words w-[180px] text-gray-600">
            {name}
          </h1>
          <div className="flex">
            {/* serving time */}
            <div className="">
              <div className="flex gap-1">
                <ClockIcon className="text-gray-600" height={25} width={25} />
                <span className="font-medium text-gray-600">
                  {servingTime} mins
                </span>
              </div>
              {/* paid status */}
              <div className="flex items-center gap-1">
                <span className="font-medium text-gray-600">paid</span>
                {paid ? (
                  <CheckCircleIcon
                    className="text-green-500"
                    height={15}
                    width={15}
                  />
                ) : (
                  <XCircleIcon
                    className="text-red-500"
                    height={15}
                    width={15}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* order status */}
        <div
          className={`flex items-center flex-col ${
            paidStatus === 'pending payment'
              ? 'animate-pulse'
              : paidStatus === 'serving'
              ? 'animate-pulse'
              : ''
          }`}
        >
          <img className="w-8 h-8" src="/logo_svg/cooking.png" alt="serving" />
          <span className="text-xs w-[50px] break-words text-center">
            {paidStatus === 'serving'
              ? paidStatus
              : paidStatus === 'pending payment'
              ? 'pending payment'
              : 'done'}
          </span>
        </div>
      </div>
    </>
  );
};

export default OrderItems;
