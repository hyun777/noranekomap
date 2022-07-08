import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 70%;
  width: 25%;
  justify-content: space-between;
  position: relative;

  > p.address {
    font-size: 1.2rem;
    padding: 0.5rem 0;
    text-align: center;
  }

  > div.cropPreview {
    position: relative;
    width: 200px;
    height: 200px;
    place-self: center center;
  }

  > div.characteristic {
    display: flex;
    flex-direction: column;

    > label {
      padding: 0.5rem 0;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > textarea {
      height: 8rem;
      resize: none;
      white-space: pre-wrap;
    }
  }
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

export const StyledRadioDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;

  > div {
    display: flex;
    align-items: center;
    height: 30px;
  }

  ~ input {
    cursor: pointer;
    &::file-selector-button {
      background-color: black;
      color: white;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export default StyledForm;
