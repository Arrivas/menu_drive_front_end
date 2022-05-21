import { CheckIcon } from '@heroicons/react/outline';
import {  RadioGroup } from '@headlessui/react';

interface RadioSelectPaymentProps {
  radioValue: string
  setRadioValue: (val: string) => any
}
 
const RadioSelectPayment: React.FC<RadioSelectPaymentProps> = ({radioValue, setRadioValue}) => {
  const paymentMethod = [
    {
      name: 'Cash',
      desc: 'Pay in the counter',
    },
    {
      name: 'PayPal',
      desc: 'Pay online with PayPal',
    },
  ];
  return ( <>
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
                          'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-black'
                        }
                  ${checked ? 'text-black' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
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
  </> );
}
 
export default RadioSelectPayment;