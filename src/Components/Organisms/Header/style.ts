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
    'grid-area': '1/4/2/5',
    'place-self': 'center center',
  },
  LoginUserMenu: {
    'grid-area': '1/4/2/5',
    'place-self': 'center center',
  },
};

const StyledDiv = styled.div`
  display: grid;
  grid-template: 1fr / 25% 50% 10% 15%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  /* theme provider */
  grid-area: ${({ theme }) => theme.Header['grid-area']};
`;

export const StyledUserName = styled.p`
  color: rgba(0, 0, 0, 0.8);
  user-select: none;
  place-self: center center;
  width: 100%;
  height: 60%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledDiv;
