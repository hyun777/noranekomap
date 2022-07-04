import styled from 'styled-components';

const StyledDiv = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  padding: 0 0 1.5rem 0;
  box-sizing: border-box;

  grid-area: ${({ theme }) => theme.Map['grid-area']};
  place-self: ${({ theme }) => theme.Map['place-self']};
`;

export default StyledDiv;
