import Header from '../../Organisms/Header/Header';
import SignUpWindow from '../../Molecules/SignUpWindow/SignUpWindow';
import StyledDiv from './style';
import { ThemeProvider } from 'styled-components';
import { theme } from './style';
import Footer from '../../Atoms/Footer/Footer';

function SignUp() {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <Header />
        <SignUpWindow />
        <Footer />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default SignUp;
