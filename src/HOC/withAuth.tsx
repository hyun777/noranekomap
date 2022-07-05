import { NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../store/modules/user';

type permission = 'everybody' | 'onlyMember' | 'onlyNonMember' | 'onlyAdmin';

function withAuth(
  Component: NextComponentType<NextPageContext, any, {}>,
  permission: permission
) {
  return (props: any) => {
    const router = useRouter();
    const dispatch = useDispatch();
    switch (permission) {
      case 'everybody':
        if (typeof window !== 'undefined') {
          // 토큰이 없을경우(로컬스토리지) -> 그냥 바로 컴포넌트를 리턴하면됨
          const accessToken = localStorage.getItem('accessToken');
          if (accessToken === null) {
            dispatch(updateUserInfo({}));
            localStorage.removeItem('refreshToken');
            return <Component {...props} />;
          }

          // 토큰이 존재함 -> auth인증 -> false면 바로 컴포넌트 리턴, true면 스토어 유저정보 업데이트
          axios({
            method: 'GET',
            url: '/api/auth',
            headers: { 'x-access-token': accessToken },
          }).then(({ data: { success, userInfo } }) => {
            // auth 실패
            if (!success) {
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');

              dispatch(updateUserInfo({}));
              return <Component {...props} />;
            }

            // auth 성공 -> userInfo 스토어 업데이트
            dispatch(updateUserInfo(userInfo));
          });
        }
        // 이거 안적으면 에러남, 이거 하기싫으면 useEffect활용해야함, 즉 저 위에 업데이트되는건 일단 한번 랜더링된후임
        return <Component {...props} />;

        break;

      case 'onlyMember':
        break;

      case 'onlyNonMember':
        if (typeof window !== 'undefined') {
          // 토큰이 존재할경우에 index page로 push
          const accessToken = localStorage.getItem('accessToken');

          if (accessToken !== null) {
            router.push('/');
          }

          return <Component {...props} />;
        }
        return <Component {...props} />;
        break;

      case 'onlyAdmin':
        break;

      default:
        break;
    }
  };
}

export default withAuth;
