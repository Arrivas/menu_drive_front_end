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
          <div className="grid grid-rows-2 ">
            {/* bg */}
            <img
              className="fixed top-0 left-0 -z-50 opacity-70 "
              src="/bg/ingredients-bg.jpg"
            />
            <div className="">
              <div className="flex items-center">
                {/* upper component */}
                <Link href="/">
                  <button className="flex justify-between w-[60%]">
                    <ArrowLeftIcon width={25} height={25} />
                    <h1 className="font-bold text-lg">Account</h1>
                  </button>
                </Link>
              </div>
              <div className="flex items-center justify-center flex-col py-10">
                {/* mid-top */}
                <img
                  className=" w-16 h-16 rounded-full"
                  src={user?.user?.picture}
                />
                <h1 className="py-2 font-bold">{user?.user?.name}</h1>
              </div>
            </div>
            <div className=" h-[80%] w-full bg-white border rounded-2xl p-5 border-black">
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
