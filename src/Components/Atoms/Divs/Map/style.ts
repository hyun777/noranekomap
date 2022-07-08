import styled, { keyframes } from 'styled-components';

const jump = keyframes`
  0%{
  transform: translateY(-25px);

  }

  100% {
  transform: translateY(-35px);

  }
`;

const StyledDiv = styled.div`
  position: relative;
  width: 95%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  padding: 0 0 1.5rem 0;
  box-sizing: border-box;

  grid-area: ${({ theme }) => theme.Map['grid-area']};
  place-self: ${({ theme }) => theme.Map['place-self']};
`;

export const StyledClickMarker = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
  transform: translateY(-25px);
  animation: ${jump} 0.5s infinite alternate;

  &[data-selected='true'] {
    border-radius: 50%;
    overflow: hidden;
  }
`;

export default StyledDiv;
