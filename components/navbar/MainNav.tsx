import { useContext } from 'react';
import { HomeIcon, PencilAltIcon, UserIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import AuthContext from '../../context/AuthContext';

interface MainNavProps {}

const MainNav: React.FC<MainNavProps> = () => {
  const { activeNav, setActiveNav } = useContext(AuthContext);
  const liClass: any =
    'transition duration-[200ms] ease-linear flex items-center gap-2  px-3 py-2 rounded-full';
  const spanClass: any = 'font-bold text-white text-lg';
  // 3d1c47 old color
  // old bg d1c5d6
  const navItems = [
    {
      id: 1,
      spanText: 'Home',
      path: '/',
      icon: (
        <HomeIcon
          className={activeNav === 'Home' ? 'text-white' : 'text-black'}
          height={30}
          width={30}
        />
      ),
    },
    {
      id: 2,
      spanText: 'Orders',
      path: '/orders',
      icon: (
        <PencilAltIcon
          className={activeNav === 'Orders' ? 'text-white' : 'text-black'}
          height={30}
          width={30}
        />
      ),
    },
    {
      id: 3,
      spanText: 'Account',
      path: 'account',
      icon: (
        <UserIcon
          className={activeNav === 'Account' ? 'text-white' : 'text-black'}
          height={30}
          width={30}
        />
      ),
    },
  ];
  return (
    <>
      <nav className="absolute bottom-5 left-0 w-full bottomNav font-roboto z-50">
        <ul className="flex justify-center items-center gap-8 xs:gap-14 text-center">
          {navItems.map((item) => (
            <Link href={item.path} key={item.id}>
              <li
                onClick={() => setActiveNav(item.spanText)}
                className={
                  activeNav === item.spanText ? `${liClass} bg-black` : ''
                }
              >
                {item.icon}

                <span className={activeNav === item.spanText ? spanClass : ''}>
                  {activeNav === item.spanText ? item.spanText : ''}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
