import { useRouter } from 'next/router';
import StyledButton from './style';

function SignUpButton() {
  const router = useRouter();
  const { asPath } = router;
  const pathName = asPath.slice(1);

  function moveSignInPage() {
    router.push('/signup');
  }

  return (
    <StyledButton
      disabled={pathName === 'signup'}
      onClick={() => {
        moveSignInPage();
      }}
    >
      会員登録
    </StyledButton>
  );
}

export default SignUpButton;
