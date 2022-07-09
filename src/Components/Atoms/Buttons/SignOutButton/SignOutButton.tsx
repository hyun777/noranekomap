import StyledButton from './style';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../../store/modules/user';
import { useRouter } from 'next/router';

function SignOutButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  function signOutHandler() {
    dispatch(updateUserInfo({}));
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    if (router.asPath !== '/') {
      router.push('/');
    }
  }

  return (
    <StyledButton
      onClick={() => {
        signOutHandler();
      }}
    >
      ログアウト
    </StyledButton>
  );
}

export default SignOutButton;
