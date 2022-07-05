import styled from 'styled-components';

const StyledButton = styled.button`
  width: 8rem;
  height: 2rem;
  font-size: 1.1rem;
  background-color: black;
  color: white;
  user-select: none;

  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;

export default StyledButton;
