import StyledDiv from './style';
import LoginButton from '../../Atoms/Buttons/LoginButton/LoginButton';
import SignUpButton from '../../Atoms/Buttons/SignUpButton/SignUpButton';

function HeaderMenu() {
  return (
    <StyledDiv>
      <LoginButton />
      <SignUpButton />
    </StyledDiv>
  );
}

export default HeaderMenu;
