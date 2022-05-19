import { useContext } from 'react';
import { HomeIcon, PencilAltIcon, UserIcon } from '@heroicons/react/outline';
import AuthContext from '../../context/AuthContext';

interface MainNavProps {}

const MainNav: React.FC<MainNavProps> = () => {
  const { activeNav, setActiveNav } = useContext(AuthContext);
  const liClass: any =
    'transition duration-[600ms] ease-linear flex items-center gap-2 bg-[#caa8d3] px-3 py-2 rounded-full';
  const spanClass: any = 'font-bold text-[#3d1c47] text-lg';
  const navItems = [
    {
      id: 1,
      spanText: 'Home',
      icon: <HomeIcon className="text-[#3d1c47]" height={30} width={30} />,
    },
    {
      id: 2,
      spanText: 'Orders',
      icon: <PencilAltIcon className="text-[#3d1c47]" height={30} width={30} />,
    },
    {
      id: 3,
      spanText: 'Account',
      icon: <UserIcon className="text-[#3d1c47]" height={30} width={30} />,
    },
  ];
  return (
    <>
      <nav className="absolute bottom-5 left-0 w-full bottomNav font-roboto">
        <ul className="flex justify-center items-center gap-8 xs:gap-14 text-center">
          {navItems.map((item) => (
            <li
              onClick={() => setActiveNav(item.spanText)}
              key={item.id}
              className={activeNav === item.spanText ? liClass : ''}
            >
              {item.icon}
              <span className={activeNav === item.spanText ? spanClass : ''}>
                {activeNav === item.spanText ? item.spanText : ''}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
