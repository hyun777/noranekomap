import Head from 'next/head';
import Detail from '../../src/Components/Templates/Detail/Detail';
import withAuth from '../../src/HOC/withAuth';
import type { NextPage } from 'next';
import axios from 'axios';

const page: NextPage = ({ data }: any) => {
  return (
    <div>
      <Head>
        <title>詳細ページ</title>
      </Head>
      <Detail data={data} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const { data } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/api/posts/${id}`,
  });

  if (!data.success)
    return {
      notFound: true,
    };

  return {
    props: {
      data: data.payload[0],
    }, // will be passed to the page component as props
  };
}

export default withAuth(page, 'everybody');
