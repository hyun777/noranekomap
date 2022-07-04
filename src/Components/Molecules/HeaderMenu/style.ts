import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  /* theme provider */
  grid-area: ${({ theme }) => theme.HeaderMenu['grid-area']};
  place-self: ${({ theme }) => theme.HeaderMenu['place-self']};
`;

export default StyledDiv;
