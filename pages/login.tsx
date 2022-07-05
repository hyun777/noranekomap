import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Login from '../src/Components/Templates/Login/Login';
import GlobalLoading from '../src/Components/Atoms/Divs/GlobalLoading/GlobalLoading';
import { RootState } from '../src/store/modules/rootReducer';
import withAuth from '../src/HOC/withAuth';

const Home: NextPage = () => {
  const { globalLoading } = useSelector((state: RootState) => state.global);

  return (
    <div>
      <Head>
        <title>ログイン</title>
      </Head>
      <Login />
      {globalLoading && <GlobalLoading />}
    </div>
  );
};

export default withAuth(Home, 'onlyNonMember');
