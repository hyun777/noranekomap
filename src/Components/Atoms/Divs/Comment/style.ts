import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 80%;
  height: 85%;
  place-self: center center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > div[data-class='comment'] {
    flex: 1;
    display: flex;
    flex-direction: column;

    > h2 {
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      color: white;
      background-color: black;
    }
  }

  > input[data-class='input'] {
    height: 2.6rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 5px;
    box-sizing: border-box;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export default StyledDiv;
