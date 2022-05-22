import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import links from '../config/links';
import axios from 'axios';
import DashboardRed from '../redirects/DashboardRed';

const Home: NextPage = ({ foods }: any) => {
  const { setActiveNav } = useContext(AuthContext);
  useEffect(() => {
    setActiveNav('Home');
  }, []);
  return (
    <>
      <DashboardRed foods={foods} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let foods: any = {};
  await axios
    .get(`${links.default}/food`)
    .then((data) => (foods = data.data))
    .catch((err) => console.log(err.message));
  return {
    props: {
      foods,
    },
  };
};
