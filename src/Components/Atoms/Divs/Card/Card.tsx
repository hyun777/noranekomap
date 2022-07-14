import { useRouter } from 'next/router';
import { updateSelectedMarker } from '../../../../store/modules/global';
import { RootState } from '../../../../store/modules/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import StyledCard from './style';
import Image from 'next/image';

interface card {
  date: any;
  thumbnail: any;
  catName: string;
  address: string;
  gender: number;
  userId: number;
  _id: string;
}

function Card({
  date,
  thumbnail,
  catName,
  address,
  gender,
  userId,
  _id,
}: card) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { postInfo } = useSelector((state: RootState) => state.post);
  const { selectedMarker } = useSelector((state: RootState) => state.global);

  let genderString;

  switch (gender) {
    case 0:
      genderString = '未定';
      break;
    case 1:
      genderString = '男の子';

      break;
    case 2:
      genderString = '女の子';

      break;

    default:
      break;
  }

  function moveToDetailPage() {
    router.push(`/post/${_id}`);
  }

  return (
    <StyledCard
      onClick={(e) => {
        const { thumbnail, lat, lng, _id } = postInfo.find((item: any) => {
          return item._id === e.currentTarget.dataset.id;
        });
        dispatch(updateSelectedMarker({ thumbnail, lat, lng, _id }));
      }}
      data-id={_id}
      data-selected={selectedMarker._id === _id ? true : false}
    >
      <div data-class='left'>
        <Image src={thumbnail} alt='logo' layout='fill' priority />
      </div>

      <div data-class='right'>
        <p>{address}</p>
        <p>{new Date(date).toLocaleString('ja')}</p>
        <p>投稿者 / {userId}</p>
        <p style={{ fontWeight: 'bolder' }}>名前 / {catName}</p>
        <p>性別 / {genderString}</p>
        <div
          data-class='right__detail'
          onClick={() => {
            moveToDetailPage();
          }}
          title='詳細ページへ'
        >
          <p>詳細</p>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
