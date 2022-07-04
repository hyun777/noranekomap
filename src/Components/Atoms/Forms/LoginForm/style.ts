import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 25%;
  width: 20%;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

export default StyledForm;
