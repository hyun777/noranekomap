import Header from '../../Organisms/Header/Header';
import LoginWindow from '../../Molecules/LoginWindow/LoginWindow';
import StyledDiv from './style';
import { ThemeProvider } from 'styled-components';
import { theme } from './style';
import Footer from '../../Atoms/Footer/Footer';

function Login() {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <Header />
        <LoginWindow />
        <Footer />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default Login;
