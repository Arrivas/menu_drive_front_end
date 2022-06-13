import Link from 'next/link';
import {
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
interface ProfileCompProps {
  user: any;
}

const ProfileComp: React.FC<ProfileCompProps> = ({ user }) => {
  if (!user) return <></>;
  console.log(user?.user?.picture);
  return (
    <>
      <div className="flex items-center justify-center font-roboto">
        <div className="pt-10 h-[550px] xs:h-screen w-[290px] xs:w-[375px] font-roboto relative px-2 xs:px-5">
          <div className="flex flex-col gap-2">
            {/* bg */}
            <img
              className="fixed object-cover h-screen top-0 left-0 -z-50"
              src="/bg/ingredients-bg.jpg"
            />
            <div className="backdrop-blur-md p-2 rounded-xl">
              <div className="flex items-center">
                {/* upper component */}
                <Link href="/">
                  <button className="flex justify-between w-[60%] text-gray-100">
                    <ArrowLeftIcon width={25} height={25} />
                    <h1 className="font-bold text-xl">Account</h1>
                  </button>
                </Link>
              </div>
              <div className="flex items-center justify-center flex-col py-8">
                {/* mid-top */}
                <img
                  className=" w-18 h-18 rounded-full py-1"
                  src={user?.user?.picture}
                />
                <h1 className="py-2 font-bold text-2xl text-gray-100">
                  {user?.user?.name}
                </h1>
              </div>
            </div>
            <hr className="border-gray-300 w-[90%] mx-auto" />
            <div className=" h-[80%] w-full bg-white border rounded-md p-5">
              <h1 className="font-extrabold">Account Settings</h1>
              <div className="">
                <div className="flex gap-2 py-2">
                  <QuestionMarkCircleIcon
                    className="text-gray-300"
                    width={30}
                    height={30}
                  />
                  <h1 className="font-bold text-lg text-gray-300">About</h1>
                </div>
                <Link href="/logout">
                  <button className="flex gap-2 py-2">
                    <LogoutIcon width={30} height={30} />
                    <h1 className="font-bold text-lg">Logout</h1>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComp;
