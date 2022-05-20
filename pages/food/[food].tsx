import { GetServerSideProps } from 'next';
import links from '../../config/links';
import axios from 'axios';
import FoodDetails from '../../components/dashboard/FoodDetails';

interface FoodProps {
  foodData: any;
}

const Food: React.FC<FoodProps> = ({ foodData }) => {
  return (
    <>
      <FoodDetails foodData={foodData} />
    </>
  );
};

export default Food;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const foodId = context.params.food;
  let foodData: any = {};
  await axios
    .get(`${links.default}/food/${foodId}`)
    .then((data) => {
      foodData = data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return {
    props: {
      foodData,
    },
  };
};
