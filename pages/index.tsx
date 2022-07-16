import { updateSelectedMarker } from '../src/store/modules/global';
import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../src/store/modules/rootReducer';
import Index from '../src/Components/Templates/Index/Index';
import withAuth from '../src/HOC/withAuth';
import axios from 'axios';
import { updatePostInfo } from '../src/store/modules/post';

const Home: NextPage = ({ data: { payload: postData } }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePostInfo(postData));

    return () => {
      // clear something...
      dispatch(updateSelectedMarker({}));
    };
  }, []);

  return (
    <div>
      <Head>
        <title>中村区野良猫マップ</title>
      </Head>
      <Index postData={postData} />
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/api/posts`,
  });

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

export default withAuth(Home, 'everybody');
