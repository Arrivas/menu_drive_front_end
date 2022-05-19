import { ShoppingCartIcon } from '@heroicons/react/outline';
interface ShopingCartProps {
  cartCount?: number;
}

const ShopingCart: React.FC<ShopingCartProps> = ({ cartCount = 0 }) => {
  return (
    <>
      <div className="relative">
        <ShoppingCartIcon width={35} height={35} />
        <div className="flex py-[2px] px-[6px] items-center justify-center text-xs text-white bg-red-400 rounded-full  absolute -right-3 -top-2">
          <span>{cartCount}</span>
        </div>
      </div>
    </>
  );
};

export default ShopingCart;
