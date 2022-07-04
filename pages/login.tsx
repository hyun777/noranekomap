import type { NextPage } from 'next';
import Head from 'next/head';
import Login from '../src/Components/Templates/Login/Login';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>野良猫マップ</title>
      </Head>
      <Login />
    </div>
  );
};

export default Home;
