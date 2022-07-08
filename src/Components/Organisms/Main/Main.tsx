import { ThemeProvider } from 'styled-components';
import StyledDiv, { theme, StyledNotice } from './style';
import Map from '../../Atoms/Divs/Map/Map';
import CardList from '../../Molecules/CardList/CardList';

function Main({ postData }: any) {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <StyledNotice>
          マップをクリックして登録出来ます！{'(ログイン必要)'}
        </StyledNotice>
        <Map />

        <CardList postData={postData} />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default Main;
