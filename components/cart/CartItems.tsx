import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from '@heroicons/react/outline';

interface CartItemsProps {
  handleSubQty: (item: any) => void;
  handleAddQty: () => void;
  qty: number;
  img: string;
  price: number;
  name: string;
}

const CartItems: React.FC<CartItemsProps> = ({
  handleSubQty,
  handleAddQty,
  img,
  qty,
  name,
  price,
}) => {
  return (
    <>
      <div className="flex justify-between items-center rounded-lg px-5 py-2 shadow-md relative overflow-hidden">
        <div className=" w-16 h-16 flex items-center justify-center">
          <img
            className="rounded-full shadow-md h-[80%] object-cover object-center"
            src={img}
            alt={name}
          />
        </div>
        <div className="">
          <h1 className="w-[9rem] break-words">{name}</h1>
          <span>₱{price * qty}</span>
        </div>
        <div className="flex justify-between items-center w-[30%]">
          <button onClick={handleSubQty}>
            <MinusCircleIcon width={25} height={25} />
          </button>
          <span className="font-bold">{qty}</span>
          <button onClick={handleAddQty}>
            <PlusCircleIcon width={25} height={25} />
          </button>
        </div>
        <button
          type="button"
          className="absolute right-0 top-0 h-full flex group items-center justify-center w-[5px] hover:w-[2rem] bg-red-400"
        >
          <TrashIcon
            className="text-white hidden group-hover:inline-flex"
            height={20}
            width={20}
          />
        </button>
      </div>
    </>
  );
};

export default CartItems;
