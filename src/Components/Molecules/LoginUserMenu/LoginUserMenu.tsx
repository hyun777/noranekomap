import StyledDiv from './style';
import PostListButton from '../../Atoms/Buttons/PostListButton/PostListButton';
import SignOutButton from '../../Atoms/Buttons/SignOutButton/SignOutButton';

function LoginUserMenu() {
  return (
    <StyledDiv>
      <PostListButton />
      <SignOutButton />
    </StyledDiv>
  );
}

export default LoginUserMenu;
