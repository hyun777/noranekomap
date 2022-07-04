import styled from 'styled-components';

export const theme = {
  Logo: {
    'grid-area': '1/1/2/2',
    'place-self': 'center center',
  },
  Title: {
    'grid-area': '1/2/2/3',
    'place-self': 'center center',
  },
  HeaderMenu: {
    'grid-area': '1/3/2/4',
    'place-self': 'center center',
  },
};

const StyledDiv = styled.div`
  display: grid;
  grid-template: 1fr / 20% 60% 20%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  /* theme provider */
  grid-area: ${({ theme }) => theme.Header['grid-area']};
`;

export default StyledDiv;
