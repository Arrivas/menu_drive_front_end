import { MenuIcon, SearchIcon } from '@heroicons/react/outline';
import { separteDish } from '../../functions/separateDish';
import React from 'react';
import MainLayout from '../MainLayout';
import ShoppingCartIconComp from '../cart/ShoppingCartIconComp';
import FoodCard from './FoodCard';
import Link from 'next/link';
import Loading from '../Loading';

interface DashboardProps {
  user?: any;
  foods?: any;
}

interface DashboardState {
  activeCategory: string;
  searchQuery: string;
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  state = {
    activeCategory: 'all',
    user: {},
    searchQuery: '',
  };

  render() {
    const { foods, user } = this.props;
    const { activeCategory, searchQuery }: any = this.state;
    const { setActiveCategory } = this;

    const categoryItemsSide = [
      { id: 1, path: 'all', text: 'All' },
      { id: 2, path: 'filipino', text: 'Filipino Dish' },
      { id: 3, path: 'chinese', text: 'Chinese Dish' },
      { id: 4, path: 'seafood', text: 'Seafood' },
      { id: 5, path: 'appetizer', text: 'Appetizer' },
      { id: 6, path: 'drinks', text: 'Drinks' },
      { id: 7, path: 'snacks', text: 'Snacks' },
    ];
    if (!foods) return <></>;
    let filteredFoods = separteDish(foods, activeCategory);
    if (searchQuery)
      filteredFoods =
        filteredFoods.filter((foods: any) =>
          foods.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        ) || filteredFoods;
    return (
      <>
        {Object.keys(user).length !== 0 ? (
          <MainLayout title="Home">
            <div className="flex items-center justify-center">
              <div className="pt-10 h-[550px] xs:h-screen w-[290px] xs:w-[375px] font-roboto relative px-2 xs:px-5">
                {/* top navigation */}
                <div className="mx-auto flex w-[92%] sm:w-full justify-between items-center">
                  <MenuIcon width={35} height={35} />
                  <ShoppingCartIconComp
                    cartCount={user?.cartItems?.length || 0}
                  />
                </div>
                {/* top category selection */}
                <div className="w-[95%] overflow-x-auto pt-4 no-scrollbar">
                  <div className="flex relative items-center group mb-2">
                    <SearchIcon
                      className="absolute left-0 ml-3 group-focus:text-black text-gray-400"
                      width={20}
                      height={20}
                    />
                    <input
                      className="border border-gray-400 group-focus:border-black rounded-full w-full py-[0.3rem] px-10"
                      name="searchQuery"
                      onChange={(e) =>
                        this.setState({
                          searchQuery: e.target.value,
                          activeCategory: 'all',
                        })
                      }
                      type="text"
                    />
                  </div>

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
                <div className="grid grid-cols-2 gap-2 overflow-x-hidden overflow-y-auto pb-2 pt-5 pr-2 h-[70%] gridComp">
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
        ) : (
          <Loading loading={true} />
        )}
      </>
    );
  }
  setActiveCategory = (path: string) => {
    this.setState({ activeCategory: path });
  };
}

export default Dashboard;
