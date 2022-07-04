import StyledForm, { StyledButton } from './style';

function LoginForm() {
  return (
    <StyledForm>
      <input type='text' placeholder='ID' />
      <input type='password' placeholder='PASSWORD' />
      <StyledButton type='submit'>SIGN IN</StyledButton>
    </StyledForm>
  );
}

export default LoginForm;
