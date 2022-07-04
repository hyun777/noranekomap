import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../src/store/modules/rootReducer';
import Index from '../src/Components/Templates/Index/Index';
import GlobalLoading from '../src/Components/Atoms/Divs/GlobalLoading/GlobalLoading';

const Home: NextPage = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const { count, message } = useSelector(
  //   (state: RootState) => state.loginReducer
  // );

  return (
    <div>
      <Head>
        <title>野良猫マップ</title>
      </Head>
      <Index />
    </div>
  );
};

export default Home;
