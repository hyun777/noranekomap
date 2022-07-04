import styled, { keyframes } from 'styled-components';

const upAndDown = keyframes`
   0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-2px);
    opacity: 0.6;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2.2rem;
  user-select: none;
  font-weight: bolder;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    /* transform: translateY(-2px); */
    animation: ${upAndDown} 0.5s alternate infinite;
  }

  /* theme provider */
  grid-area: ${({ theme }) => theme.Title['grid-area']};
  place-self: ${({ theme }) => theme.Title['place-self']};
`;

export default StyledTitle;
