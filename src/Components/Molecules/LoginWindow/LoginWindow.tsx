import StyledDiv, { StyledH2 } from './style';
import LoginForm from '../../Atoms/Forms/LoginForm/LoginForm';

function LoginWindow() {
  return (
    <StyledDiv>
      <StyledH2>SIGN IN</StyledH2>
      <LoginForm />
    </StyledDiv>
  );
}

export default LoginWindow;
