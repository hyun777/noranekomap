import styled, { ThemeProvider } from 'styled-components';
import StyledDiv, { theme } from './style';
import Logo from '../../Atoms/Divs/Logo/Logo';
import Title from '../../Atoms/H1s/Title/Title';
import HeaderMenu from '../../Molecules/HeaderMenu/HeaderMenu';

styled(Title)`
  font-size: 3rem;
  user-select: none;
  font-weight: bolder;
`;

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <Logo />
        <Title />
        <HeaderMenu />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default Header;
