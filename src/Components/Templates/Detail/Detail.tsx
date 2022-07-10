import StyledDiv, { theme } from './styles';
import { ThemeProvider } from 'styled-components';
import Header from '../../Organisms/Header/Header';
import Footer from '../../Atoms/Footer/Footer';
import DetailMain from '../../Molecules/DetailMain/DetailMain';

function Detail({ data }: any) {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <Header />
        <DetailMain data={data} />
        <Footer />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default Detail;
