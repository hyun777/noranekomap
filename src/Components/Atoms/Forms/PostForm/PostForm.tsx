import { useRef, useEffect, useState, useCallback } from 'react';
import StyledForm, { StyledButton, StyledRadioDiv } from './style';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGlobalLoading } from '../../../../store/modules/global';
import { useRouter } from 'next/router';
import { RootState } from '../../../../store/modules/rootReducer';
import {
  checkEmptyInput,
  checkTwoInputValueMatch,
} from '../../../../utils/formCheck';
import Cropper, { Area } from 'react-easy-crop';
import { getCroppedImg } from '../../../../utils/cropImage';

function PostForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { globalLoading } = useSelector((state: RootState) => state.global);
  const { userInfo } = useSelector((state: RootState) => state.user);

  // refs
  const catNameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const charaRef = useRef<HTMLTextAreaElement>(null);

  // state
  const [address, setAddress] = useState('');
  const [image, setImage] = useState<any>();
  const [croppedImage, setCroppedImage] = useState<any>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [genderInput, setGenderInput] = useState(0);

  const inputRefArray = [catNameRef, imageRef, charaRef];

  useEffect(() => {
    if (!router.isReady) return;

    axios({
      method: 'GET',
      url: `https://maps.googleapis.com/maps/api/geocode/json?language=ja&latlng=${Object.values(
        router.query
      ).join(',')}&key=${process.env.NEXT_PUBLIC_MAP_ID}`,
    }).then(({ data: { results } }) => {
      setAddress(results[7].formatted_address);
    });

    if (catNameRef.current !== null) {
      catNameRef.current.focus();
    }
  }, [router.isReady, router.query]);

  async function postHandler() {
    if (globalLoading) return;

    if (
      catNameRef.current !== null &&
      imageRef.current !== null &&
      charaRef.current !== null
    ) {
      // 入力データ　前後空白削除
      const { userId } = userInfo;
      const catName = catNameRef.current.value.trim();
      const gender = genderInput;
      const characteristic = charaRef.current.value.trim();

      // blur all inputs
      catNameRef.current.blur();
      imageRef.current.blur();
      charaRef.current.blur();

      dispatch(toggleGlobalLoading(true));

      try {
        const { data } = await axios({
          method: 'POST',
          url: '/api/posts',
          data: {
            userId,
            catName,
            gender,
            characteristic,
            address,
            image: croppedImage.image,
            thumbnail: croppedImage.thumbnail,
            lat: router.query.lat,
            lng: router.query.lng,
          },
        });

        dispatch(toggleGlobalLoading(false));
        if (!data.success) return alert('登録に失敗しました。');

        alert('ポストに成功しました!メイン画面に戻ります。');
        router.push('/');
      } catch (error) {
        dispatch(toggleGlobalLoading(false));

        alert('登録に失敗しました。');
      }
    }
  }

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();

        // check empty inputs
        if (!checkEmptyInput(inputRefArray)) return;

        // all check ok!
        postHandler();
      }}
    >
      <p className='address'>{address}</p>
      <input
        type='text'
        placeholder='猫のあだ名'
        maxLength={20}
        autoFocus
        ref={catNameRef}
      />
      <StyledRadioDiv>
        <div>
          <label htmlFor='male'>男の子</label>
          <input
            type='radio'
            name='gender'
            value='1'
            id='male'
            onClick={() => {
              setGenderInput(1);
            }}
          />
        </div>
        <div>
          <label htmlFor='female'>女の子</label>
          <input
            type='radio'
            name='gender'
            value='2'
            id='female'
            onClick={() => {
              setGenderInput(2);
            }}
          />
        </div>
        <div>
          <label htmlFor='unknown'>未定</label>
          <input
            type='radio'
            name='gender'
            value='0'
            id='unknown'
            defaultChecked
            onClick={() => {
              setGenderInput(0);
            }}
          />
        </div>
      </StyledRadioDiv>
      <input
        type='file'
        accept='.png, .jpg, .jpeg'
        ref={imageRef}
        onChange={(e) => {
          e.preventDefault();

          if (e.target.value.length === 0) {
            setImage(null);
            setCroppedImage(null);
            return;
          }

          if (e.target.files !== null) {
            const isImage = /\.(jpe?g||png)$/i.test(e.target.files[0].name);
            // validate selected file
            if (!isImage) {
              e.target.value = '';
              alert('イメージファイルを選択してください');
              return;
            }

            const reader = new FileReader();
            const file = e.target.files[0];
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              setImage(reader.result);
            };
          }
        }}
      />
      {image && (
        <div className='cropPreview'>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={async (
              croppedArea: Area,
              croppedAreaPixels: Area
            ) => {
              const result = await getCroppedImg(image, croppedAreaPixels);
              setCroppedImage(result);
            }}
            onZoomChange={setZoom}
          />
        </div>
      )}

      <div className='characteristic'>
        <label htmlFor='characteristic'>特徴</label>
        <textarea id='characteristic' ref={charaRef}></textarea>
      </div>
      <StyledButton type='submit'>SIGN UP</StyledButton>
    </StyledForm>
  );
}

export default PostForm;
