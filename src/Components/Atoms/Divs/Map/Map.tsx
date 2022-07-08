import { updateSelectedMarker } from '../../../../store/modules/global';
import { useRouter } from 'next/router';
import { RootState } from '../../../../store/modules/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import StyledDiv, { StyledClickMarker } from './style';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function Map() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { selectedMarker } = useSelector((state: RootState) => state.global);

  const [center, setCenter] = useState({
    lat: 35.16471304367261,
    lng: 136.86826450858632,
  });
  const [toggleMapClick, setToggleMapClick] = useState(false);

  async function createPost(e: GoogleMapReact.ClickEventValue) {
    // 会員じゃない場合 -> return
    if (!userInfo.userId) return;

    dispatch(updateSelectedMarker({}));
    if (toggleMapClick) return;

    setToggleMapClick(true);
    await new Promise((res, rej) => {
      setCenter({ lat: e.lat, lng: e.lng });
      setTimeout(() => {
        res(true);
      }, 1000);
    });

    setToggleMapClick(false);

    // 登録しますか？
    const answer = confirm('登録を進めますか？');

    if (!answer) return;
    // post pageへpush
    router.push({
      pathname: '/post',
      query: { lat: e.lat, lng: e.lng },
    });
  }

  return (
    <StyledDiv>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_ID as string }}
        defaultCenter={{
          lat: 35.16471304367261,
          lng: 136.86826450858632,
        }}
        defaultZoom={15}
        center={center}
        onClick={(e) => {
          createPost(e);
        }}
      >
        {toggleMapClick ? <Marker {...center} /> : ''}
        {selectedMarker.lat ? <SelectedMarker {...selectedMarker} /> : ''}
      </GoogleMapReact>
    </StyledDiv>
  );
}

const Marker = ({ lat, lng }: { lat: number; lng: number }) => {
  return (
    <StyledClickMarker>
      <Image
        src='/images/click_marker.png'
        alt='click marker'
        layout='fill'
        objectFit='contain'
        priority
      />
    </StyledClickMarker>
  );
};

const SelectedMarker = ({
  lat,
  lng,
  thumbnail,
}: {
  lat: number;
  lng: number;
  thumbnail: string;
}) => {
  return (
    <StyledClickMarker data-selected={true}>
      <Image
        src={thumbnail}
        alt='marker'
        layout='fill'
        objectFit='contain'
        priority
      />
    </StyledClickMarker>
  );
};

export default Map;
