import { ArrowLeftIcon } from '@heroicons/react/outline';
interface ProfileCompProps {}

const ProfileComp: React.FC<ProfileCompProps> = () => {
  return (
    <>
      <div className="flex items-center justify-center font-roboto">
        <div className="pt-10 h-[550px] xs:h-screen w-[290px] xs:w-[375px] font-roboto relative px-2 xs:px-5">
         <div className="flex">
            {/* upper component */}
          <div className="flex justify-between w-[60%]">
            <ArrowLeftIcon width={25} height={25} />
            <h1 className="font-bold text-lg">Account</h1>
          </div>
          {/* mid-top */}
          <img className="bg-black w-16 h-16 rounded-full" src="" />
         </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComp;
