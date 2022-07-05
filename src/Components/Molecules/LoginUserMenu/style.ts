import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  /* theme provider */
  grid-area: ${({ theme }) => theme.LoginUserMenu['grid-area']};
  place-self: ${({ theme }) => theme.LoginUserMenu['place-self']};
`;

export default StyledDiv;
