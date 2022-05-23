import { Disclosure } from '@headlessui/react';
import { ClockIcon } from '@heroicons/react/outline';
import {
  CheckCircleIcon,
  XCircleIcon,
  ChevronUpIcon,
} from '@heroicons/react/solid';

interface OrderItemsProps {
  orderStatus?: any;
  orderedFoods?: any;
}

const OrderItems: React.FC<OrderItemsProps> = ({
  orderStatus,
  orderedFoods,
}) => {
  const { status, grandTotal } = orderStatus;
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <div className="mx-auto w-full max-w-md bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="shadow-lg rounded-md px-2 flex w-full justify-between py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                    <span>{orderStatus.orderDate}</span>

                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 shadow-lg rounded-md text-sm text-gray-500">
                    {orderedFoods
                      .sort((a: any, b: any) => {
                        if (a.servingTime === b.servingTime) return 0;
                        else if (a.servingTime > b.servingTime) return -1;
                        else return 1;
                      })
                      .map((item: any) => (
                        <div key={item.id} className="flex flex-col">
                          <div className="flex items-center justify-start gap-2">
                            <div className="">
                              <img
                                className="object-cover object-center w-8"
                                src={item.img}
                                alt="food"
                              />
                            </div>
                            <h1 className="font-semibold break-words w-[90px]">
                              {item.name}
                            </h1>
                            {/* serving time */}
                            <div className="">
                              <div className="flex gap-1 items-center justify-center">
                                <ClockIcon
                                  className="text-gray-600"
                                  height={22}
                                  width={22}
                                />
                                <span className="font-medium text-gray-600 w-[60px]">
                                  {item.servingTime} mins
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    <div className="flex items-center justify-end w-full gap-1">
                      <h1>total: </h1>
                      <span>₱{grandTotal}</span>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div
          className={`flex items-center flex-col ${
            status === 'pending payment'
              ? 'animate-pulse'
              : status === 'serving'
              ? 'animate-pulse'
              : ''
          }`}
        >
          <img className="w-8 h-8" src="/logo_svg/cooking.png" alt="serving" />
          <span className="text-xs w-[50px] break-words text-center">
            {status === 'serving'
              ? status
              : status === 'pending payment'
              ? 'pending payment'
              : 'done'}
          </span>
        </div>
      </div>
    </>
  );
};

export default OrderItems;
