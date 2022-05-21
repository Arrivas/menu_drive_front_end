import { Dialog, RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import React from 'react';
import RadioSelectPayment from './RadioSelectPayment';

interface PaymentModalProps {
  isOpen: boolean;
  setIsOpen: (condition: boolean) => any;
  radioValue: string;
  setRadioValue: (value: string) => any;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  setIsOpen,
  radioValue,
  setRadioValue,
}) => {
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
          {/* payment method */}
          <RadioSelectPayment
            radioValue={radioValue}
            setRadioValue={setRadioValue}
          />
          <div className="flex flex-col mx-auto py-5 w-[80%]">
            <button
              className="rounded-md font-bold bg-green-400 text-green-800 py-3"
              type="button"
            >
              pay now
            </button>
            <button
              className="mt-1 rounded-md font-bold bg-red-400 text-red-800 py-3"
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
