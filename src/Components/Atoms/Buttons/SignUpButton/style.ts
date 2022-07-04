import styled from 'styled-components';

const StyledButton = styled.button`
  width: 8rem;
  height: 2rem;
  font-size: 1.1rem;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s;
  user-select: none;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export default StyledButton;
