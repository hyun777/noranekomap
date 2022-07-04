import { useRouter } from 'next/router';
import StyledButton from './style';

function LoginButton() {
  const router = useRouter();
  const { asPath } = router;
  const pathName = asPath.slice(1);

  function moveLoginPage() {
    router.push('/login');
  }

  return (
    <StyledButton
      disabled={pathName === 'login' || false}
      onClick={() => {
        moveLoginPage();
      }}
    >
      ログイン
    </StyledButton>
  );
}

export default LoginButton;
