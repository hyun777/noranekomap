import { ThemeProvider } from 'styled-components';
import StyledDiv, { theme, StyledNotice } from './style';
import Map from '../../Atoms/Divs/Map/Map';

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <StyledNotice>
          マップをクリックして登録出来ます！{'(ログイン必要)'}
        </StyledNotice>
        <Map />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default Main;
