import { MenuIcon } from '@heroicons/react/outline';
import { separteDish } from '../../functions/separateDish';
import React from 'react';
import MainLayout from '../MainLayout';
import ShoppingCart from '../cart/ShoppingCart';
import FoodCard from './FoodCard';
import Link from 'next/link';

interface DashboardProps {
  user?: any;
  foods?: any;
}

interface DashboardState {
  activeCategory: string;
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  state = {
    activeCategory: 'filipino',
  };
  render() {
    const { user, foods } = this.props;
    const { activeCategory } = this.state;
    const { setActiveCategory } = this;
    // if (JSON.stringify(user) !== JSON.stringify({})) return <></>; loading
    const categoryItemsSide = [
      { id: 1, path: 'filipino', text: 'Filipino Dish' },
      { id: 2, path: 'chinese', text: 'Chinese Dish' },
      { id: 3, path: 'seafood', text: 'Seafood' },
      { id: 4, path: 'appetizer', text: 'Appetizer' },
      { id: 5, path: 'drinks', text: 'Drinks' },
      { id: 6, path: 'snacks', text: 'Snacks' },
    ];
    const filteredFoods = separteDish(foods, activeCategory);
    return (
      <>
        {user && (
          <MainLayout title="Home">
            <div className="flex items-center justify-center">
              <div className="pt-10 h-[550px] xs:h-screen w-[290px] xs:w-[375px] font-roboto relative px-2 xs:px-5">
                {/* top navigation */}
                <div className="mx-auto flex w-[90%] justify-between items-center">
                  <MenuIcon width={35} height={35} />
                  <ShoppingCart cartCount={0} />
                </div>
                {/* top category selection */}
                <div className="w-[95%] overflow-x-auto pt-4 no-scrollbar">
                  <ul className="flex gap-4">
                    {categoryItemsSide.map((item) => (
                      <li
                        key={item.id}
                        className={`${
                          item.path === activeCategory
                            ? 'text-black'
                            : 'text-[#bebebe]'
                        } font-semibold whitespace-nowrap pb-2`}
                        onClick={() => setActiveCategory(item.path)}
                      >
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* main content */}
                <div className="grid grid-cols-2 gap-2 overflow-x-hidden overflow-y-auto pb-2 pt-5 pr-2 h-[70%]">
                  {filteredFoods.map((food: any) => (
                    <Link href={`/food/${food.id}`} key={food.id} passHref>
                      <a>
                        <FoodCard
                          title={food.name}
                          description={food.description}
                          imgUrl={food.img}
                          price={food.price}
                          ratings={food.ratings}
                        />
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </MainLayout>
        )}
      </>
    );
  }
  setActiveCategory = (path: string) => {
    this.setState({ activeCategory: path });
  };
}

export default Dashboard;
