import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { RootState } from '../src/store/modules/rootReducer';
import SignUp from '../src/Components/Templates/SignUp/SignUp';
import GlobalLoading from '../src/Components/Atoms/Divs/GlobalLoading/GlobalLoading';
import withAuth from '../src/HOC/withAuth';

const Home: NextPage = () => {
  const { globalLoading } = useSelector((state: RootState) => state.global);

  return (
    <div>
      <Head>
        <title>会員登録</title>
      </Head>
      <SignUp />
      {globalLoading && <GlobalLoading />}
    </div>
  );
};

export default withAuth(Home, 'onlyNonMember');
