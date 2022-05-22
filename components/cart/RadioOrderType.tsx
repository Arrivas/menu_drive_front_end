import { CheckIcon } from '@heroicons/react/outline';
import { RadioGroup } from '@headlessui/react';

interface RadioOrderTypeProps {
  orderType: string;
  setOrderType: (val: string) => any;
}

const RadioOrderType: React.FC<RadioOrderTypeProps> = ({
  orderType,
  setOrderType,
}) => {
  const orderTypeItems = [
    {
      name: 'Dine-in',
    },
    {
      name: 'Take-out',
    },
  ];
  return (
    <>
      <div className="w-full px-4 pt-5">
        <h1>Select Order Type</h1>
        <div className="mx-auto w-full max-w-md">
          <RadioGroup value={orderType} onChange={setOrderType}>
            <div className="flex gap-2">
              {orderTypeItems.map((order) => (
                <RadioGroup.Option
                  key={order.name}
                  value={order.name}
                  className={({ active, checked }) =>
                    `${
                      active &&
                      'ring-1 ring-white ring-opacity-60 ring-offset-1 ring-offset-black '
                    }
                ${
                  checked
                    ? 'text-black ring-1 ring-white ring-opacity-60 ring-offset-1 ring-offset-black'
                    : 'bg-white'
                }
                w-full relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? 'text-black' : 'text-gray-400'
                              }`}
                            >
                              {order.name}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-black">
                            <CheckIcon width={25} height={25} />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </>
  );
};

export default RadioOrderType;
