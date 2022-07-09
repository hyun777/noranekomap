import { updatePostInfo } from '../../../store/modules/post';
import { useDispatch } from 'react-redux';
import GlobalLoading from '../../Atoms/Divs/GlobalLoading/GlobalLoading';
import StyledCardList from './style';
import Card from '../../Atoms/Divs/Card/Card';
import { InView } from 'react-intersection-observer';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CardList({ postData }: any) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [dataList, setDataList] = useState<any>([]);
  const [toggleLoading, setToggleLoading] = useState<boolean>(false);

  useEffect(() => {
    if (dataList.length === 0) {
      setDataList(postData);
    }
  }, []);
  return (
    <StyledCardList>
      {!(dataList.length && dataList.length !== postData.length)
        ? postData.map(
            ({
              thumbnail,
              created_at,
              address,
              catName,
              gender,
              _id,
              userId,
            }: any) => {
              return (
                <Card
                  key={_id}
                  thumbnail={thumbnail}
                  date={created_at}
                  address={address}
                  catName={catName}
                  gender={gender}
                  userId={userId}
                  _id={_id}
                />
              );
            }
          )
        : dataList.map(
            ({
              thumbnail,
              created_at,
              address,
              catName,
              gender,
              _id,
              userId,
            }: any) => {
              return (
                <Card
                  key={_id}
                  thumbnail={thumbnail}
                  date={created_at}
                  address={address}
                  catName={catName}
                  gender={gender}
                  userId={userId}
                  _id={_id}
                />
              );
            }
          )}
      <InView
        as='div'
        onChange={async (inView, entry) => {
          // inView가 true면 axios로 데이터 받아오기
          if (inView) {
            setToggleLoading(true);
            const { data } = await axios({
              method: 'GET',
              url: `/api/posts?count=${count}`,
            });

            setToggleLoading(false);

            if (data.success) {
              setCount((prev: any) => prev + 1);
              setDataList((prev: any) => {
                dispatch(updatePostInfo([...prev, ...data.payload]));
                return [...prev, ...data.payload];
              });
            }
          }
        }}
      >
        <div></div>
      </InView>
      {toggleLoading && <GlobalLoading absolute={true} />}
    </StyledCardList>
  );
}

export default CardList;
