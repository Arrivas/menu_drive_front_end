import { XCircleIcon } from '@heroicons/react/solid';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../context/AuthContext';

interface PaymentFailedProps {}

const PaymentFailed: React.FC<PaymentFailedProps> = () => {
  const router = useRouter();
  const { userPayment }: any = useContext(AuthContext);
  if (!userPayment) return null;
  const handleContinue = () => {
    router.replace('/orders');
  };
  return (
    <>
      <div className="grid grid-cols-1 items-center justify-center text-center font-roboto">
        <div className="pt-8 h-[667px] w-[375px] mx-auto sm:h-screen font-roboto relative flex items-center flex-col justify-center ">
          <XCircleIcon className="text-red-400" width={150} height={150} />
          <h1 className="font-extrabold text-4xl pt-5 pb-2">Payment Failed</h1>
          <p className="font-medium">
            Your payment was unsuccessful <br />
            please wait/complete your recent order first.
          </p>
          <div className="flex flex-col w-[90%] gap-2 py-5 my-10 px-4 shadow-lg border border-gray-200 rounded-2xl font-semibold">
            <div className="flex justify-between py-2 rounded-2xl ">
              <span>Name</span>
              <span className="whitespace-pre">
                {userPayment?.details?.name?.given_name ||
                  userPayment?.details?.name}
                &nbsp;
                {userPayment?.details?.name?.surname}
              </span>
            </div>
            <div className="flex justify-between py-2 rounded-2xl">
              <span>To Be Paid</span>
              <span>
                <span className="font-normal">₱</span>
                {userPayment.amount}
              </span>
            </div>
          </div>
          <button
            onClick={handleContinue}
            type="button"
            className="font-medium bg-black w-[90%] text-gray-200 py-3 px-2 rounded-full"
          >
            continue
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentFailed;
