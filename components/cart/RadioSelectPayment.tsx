import { CheckIcon } from '@heroicons/react/outline';
import { RadioGroup } from '@headlessui/react';

interface RadioSelectPaymentProps {
  radioValue: string;
  setRadioValue: (val: string) => any;
}

const RadioSelectPayment: React.FC<RadioSelectPaymentProps> = ({
  radioValue,
  setRadioValue,
}) => {
  const paymentMethod = [
    {
      name: 'Cash',
      desc: 'Pay in the counter',
      img: '/logo_svg/peso-icon.svg',
    },
    {
      name: 'PayPal',
      desc: 'Pay online with PayPal',
      img: '/logo_svg/paypal-icon.svg',
    },
  ];
  return (
    <>
      <div className="w-full px-4 pt-5 ">
        <h1>Select Payment Method</h1>
        <div className="mx-auto w-full max-w-md">
          <RadioGroup value={radioValue} onChange={setRadioValue}>
            <div className="space-y-2">
              {paymentMethod.map((method) => (
                <RadioGroup.Option
                  key={method.name}
                  value={method.name}
                  className={({ active, checked }) =>
                    `${
                      active &&
                      'ring-1 ring-white ring-opacity-60 ring-offset-1 ring-offset-black'
                    }
                  ${
                    checked
                      ? 'text-black ring-1 ring-white ring-opacity-60 ring-offset-1 ring-offset-black'
                      : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <div className="flex gap-2">
                              {/* image */}
                              <img
                                className={`${
                                  checked ? 'opacity-100' : 'opacity-50'
                                } w-12 object-center ${
                                  method.img === '/logo_svg/peso-icon.svg' &&
                                  'w-5'
                                }`}
                                alt="paypal"
                                src={method.img}
                              />
                              {/* content */}
                              <div className="">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${
                                    checked ? 'text-black' : 'text-gray-400'
                                  }`}
                                >
                                  {method.name}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className={`inline ${
                                    checked ? 'text-black' : 'text-gray-400'
                                  }`}
                                >
                                  <span>{method.desc}</span>
                                  <span aria-hidden="true">&middot;</span>
                                </RadioGroup.Description>
                              </div>
                            </div>
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

export default RadioSelectPayment;
