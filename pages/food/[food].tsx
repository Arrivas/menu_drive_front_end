import { GetServerSideProps } from 'next';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import links from '../../config/links';
import axios from 'axios';
import FoodDetails from '../../components/dashboard/FoodDetails';
import { getCurrentUser } from '../../auth/Auth';

interface FoodProps {
  foodData: any;
}

const Food: React.FC<FoodProps> = ({ foodData }) => {
  const router = useRouter();
  const user: any = getCurrentUser();
  useEffect(() => {
    if (!user) router.push('/login');
  }, []);
  return (
    <>
      <FoodDetails user={user} foodData={foodData} />
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
