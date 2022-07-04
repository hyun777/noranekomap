import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%{
    opacity: 1
  }

  100% {
    opacity: 0.7;
  }
`;

export const theme = {
  Map: {
    'grid-area': '2/1/3/2',
    'place-self': 'center start',
  },
};

const StyledDiv = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template: 40px 1fr / 70% 30%;

  /* theme provider */
  grid-area: ${({ theme }) => theme.Main['grid-area']};
`;

export const StyledNotice = styled.p`
  grid-area: 1/1/2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.7);
  user-select: none;
  animation: ${blink} 3s infinite alternate;
`;

export default StyledDiv;
