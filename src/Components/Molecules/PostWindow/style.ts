import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  height: 100%;

  /* theme provider */
  grid-area: ${({ theme }) => theme.LoginWindow['grid-area']};
`;

export const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: bolder;
  margin: 0 0 3.2rem 0;
`;

export default StyledDiv;
