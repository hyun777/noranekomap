import styled, { keyframes } from 'styled-components';

const rotateLogo = keyframes`
  0% {
    transform: rotate(0deg);
  }

  5% {
    transform: rotate(360deg);
  }

  50% {
    transform: rotate(360deg);
  }

  55% {
    transform: rotate(-360deg);

  }

  100% {
    transform: rotate(-360deg);
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${rotateLogo} 25s infinite;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 1;
  }

  /* theme provider */
  grid-area: ${({ theme }) => theme.Logo['grid-area']};
`;

export default StyledDiv;
