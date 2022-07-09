import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import GlobalLoading from '../src/Components/Atoms/Divs/GlobalLoading/GlobalLoading';
import { RootState } from '../src/store/modules/rootReducer';
import withAuth from '../src/HOC/withAuth';
import Post from '../src/Components/Templates/Post/Post';

const Home: NextPage = () => {
  const { globalLoading } = useSelector((state: RootState) => state.global);

  return (
    <div>
      <Head>
        <title>ポスト</title>
      </Head>
      <Post />
      {globalLoading && <GlobalLoading />}
    </div>
  );
};

export default withAuth(Home, 'onlyMember');
