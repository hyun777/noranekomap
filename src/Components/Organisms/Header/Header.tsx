import styled, { ThemeProvider } from 'styled-components';
import StyledDiv, { theme, StyledUserName } from './style';
import Logo from '../../Atoms/Divs/Logo/Logo';
import Title from '../../Atoms/H1s/Title/Title';
import HeaderMenu from '../../Molecules/HeaderMenu/HeaderMenu';
import LoginUserMenu from '../../Molecules/LoginUserMenu/LoginUserMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/modules/rootReducer';

function Header() {
  const { userInfo } = useSelector((state: RootState) => state.user);
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <Logo />
        <Title />
        {!userInfo.userId ? (
          <div></div>
        ) : (
          <StyledUserName>こんにちは！{userInfo.userId}様</StyledUserName>
        )}
        {!userInfo.userId ? <HeaderMenu /> : <LoginUserMenu />}
      </StyledDiv>
    </ThemeProvider>
  );
}

export default Header;
