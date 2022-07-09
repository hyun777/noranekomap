import { NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../store/modules/user';
import { useEffect, useState } from 'react';

type permission = 'everybody' | 'onlyMember' | 'onlyNonMember' | 'onlyAdmin';

function withAuth(
  Component: NextComponentType<NextPageContext, any, {}>,
  permission: permission
) {
  return (props: any) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [WrappedComponent, setWrappedComponent] = useState<any>(null);

    useEffect(() => {
      switch (permission) {
        case 'everybody':
          if (typeof window !== 'undefined') {
            // 토큰이 없을경우(로컬스토리지) -> 그냥 바로 컴포넌트를 리턴하면됨
            const accessToken = localStorage.getItem('accessToken');

            if (accessToken === null) {
              dispatch(updateUserInfo({}));
              localStorage.removeItem('refreshToken');
              setWrappedComponent(<Component {...props} />);
            }

            // 토큰이 존재함 -> auth인증 -> false면 바로 컴포넌트 리턴, true면 스토어 유저정보 업데이트

            axios({
              method: 'GET',
              url: '/api/auth',
              headers: { 'x-access-token': accessToken as string },
            })
              .then(({ data: { success, userInfo } }) => {
                // auth 실패
                if (!success) {
                  localStorage.removeItem('accessToken');
                  localStorage.removeItem('refreshToken');
                  dispatch(updateUserInfo({}));
                  setWrappedComponent(<Component {...props} />);
                }
                // auth 성공 -> userInfo 스토어 업데이트
                dispatch(updateUserInfo(userInfo));
                setWrappedComponent(<Component {...props} />);
              })
              .catch(() => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                dispatch(updateUserInfo({}));
                setWrappedComponent(<Component {...props} />);
              });
          }
          break;
        case 'onlyMember':
          // 토큰을 안가지고있다면 무조건 들여보내지말아야한다.
          if (typeof window !== 'undefined') {
            const accessToken = localStorage.getItem('accessToken');

            if (accessToken === null) {
              dispatch(updateUserInfo({}));
              localStorage.removeItem('refreshToken');
              router.push('/');
            }
            // 토큰을 가지고있어도 auth api에 토큰인증을 해야한다.
            axios({
              method: 'GET',
              url: '/api/auth',
              headers: { 'x-access-token': accessToken as string },
            })
              .then(({ data: { success } }) => {
                if (!success) {
                  localStorage.removeItem('accessToken');
                  localStorage.removeItem('refreshToken');
                  dispatch(updateUserInfo({}));
                  router.push('/');
                }

                setWrappedComponent(<Component {...props} />);
              })
              .catch(() => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                dispatch(updateUserInfo({}));
                router.push('/');
              });
          }
          break;
        case 'onlyNonMember':
          if (typeof window !== 'undefined') {
            // 토큰이 존재할경우에 index page로 push
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken !== null) {
              router.push('/');
            }

            setWrappedComponent(<Component {...props} />);
          }
          break;
        default:
          break;
      }
    }, []);

    if (WrappedComponent === null) {
      return null;
    } else {
      return WrappedComponent;
    }
  };
}

export default withAuth;
