import StyledDiv, { theme } from './style';
import { ThemeProvider } from 'styled-components';
import Header from '../../Organisms/Header/Header';
import Main from '../../Organisms/Main/Main';
import Footer from '../../Atoms/Footer/Footer';

function Index() {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <Header />
        <Main />
        <Footer />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default Index;
