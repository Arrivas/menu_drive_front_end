import StarRating from 'react-svg-star-rating';
import { getRatings } from '../../functions/getRatings';

interface FoodCardProps {
  title: string;
  description: string;
  price: number;
  imgUrl: string;
  ratings?: any[];
}

const FoodCard: React.FC<FoodCardProps> = ({
  title,
  description,
  price,
  imgUrl,
  ratings,
}) => {
  const userRatings: any = [];
  ratings?.filter((r) => userRatings.push(r.rate));

  const resultRatings: number = getRatings(userRatings);
  return (
    <>
      <div className="w-[10rem] h-[11rem] shadow-md rounded-2xl">
        <div className="h-[60%] flex items-center justify-center ">
          <img
            className="h-[70%] object-cover object-center "
            src={imgUrl}
            alt="food"
          />
        </div>
        <h1 className="font-semibold tex-lg px-1">{title}</h1>
        <p className="text-xs px-1 line-clamp-1">{description}</p>
        <div className="flex w-full justify-between items-center px-2">
          <StarRating
            containerClassName="flex"
            size={10}
            isReadOnly
            initialRating={resultRatings || 0}
            unit="full"
          />
          <span className="font-semibold text-xs">₱{price}</span>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
