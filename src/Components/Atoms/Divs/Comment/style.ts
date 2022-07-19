import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 80%;
  height: 85%;
  place-self: center center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  position: relative;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  > div[data-class='comment'] {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;

    > h2 {
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      color: white;
      background-color: black;
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
    }

    > ul {
      box-sizing: border-box;
      padding: 1.5rem 1rem;
      font-size: 1.2rem;
      line-height: 1.5;
      width: 100%;
      > li {
        margin: 0 0 2rem 0;
        width: 100%;

        > div {
          > span:first-child {
            font-weight: bolder;
          }
        }

        > p {
          font-size: 1.4rem;
          width: 100%;

          word-wrap: break-word;
        }
      }
    }
  }

  > form[data-class='input'] {
    display: flex;
    position: sticky;
    left: 0;
    bottom: 0;

    > input {
      flex: 1;
      height: 2.6rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 5px;
      box-sizing: border-box;
      border-bottom-left-radius: 1rem;

      &:disabled {
        font-size: 1rem;
        text-align: center;
      }
    }

    > button {
      background-color: black;
      color: white;
      border-bottom-right-radius: 1rem;
      cursor: pointer;
      font-size: 1.1rem;

      &:hover {
        opacity: 0.8;
      }

      &:disabled {
        opacity: 0.1;

        &:hover {
          opacity: 0.1;
        }
      }
    }
  }
`;

export default StyledDiv;
