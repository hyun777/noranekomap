import StyledDiv, { StyledH2 } from './style';
import SignUpForm from '../../Atoms/Forms/SignUpForm/SignUpForm';

function SignUpWindow() {
  return (
    <StyledDiv>
      <StyledH2>SIGN UP</StyledH2>
      <SignUpForm />
    </StyledDiv>
  );
}

export default SignUpWindow;
