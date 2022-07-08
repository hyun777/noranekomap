import Header from '../../Organisms/Header/Header';
import StyledDiv from './style';
import { ThemeProvider } from 'styled-components';
import { theme } from './style';
import Footer from '../../Atoms/Footer/Footer';
import PostWindow from '../../Molecules/PostWindow/PostWindow';

function Post() {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <Header />
        <PostWindow />
        <Footer />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default Post;
