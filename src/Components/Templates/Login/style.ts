import styled from 'styled-components';

export const theme = {
  Header: {
    'grid-area': '1/1/2/2',
  },
  LoginWindow: {
    'grid-area': '2/1/3/2',
  },
};

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template: 70px 1fr 30px/ 1fr;
`;

export default StyledDiv;
