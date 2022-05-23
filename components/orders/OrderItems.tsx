import { Disclosure } from '@headlessui/react';
import { ClockIcon } from '@heroicons/react/outline';
import {
  CheckCircleIcon,
  XCircleIcon,
  ChevronUpIcon,
} from '@heroicons/react/solid';

interface OrderItemsProps {
  name?: string;
  servingTime?: string;
  paidStatus?: string;
  img?: string;
  paid?: boolean;
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
      <div className="w-full">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-green-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default OrderItems;
