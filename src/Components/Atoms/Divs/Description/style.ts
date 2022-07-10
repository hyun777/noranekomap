import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template: 60% 40% / 1fr;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 80%;
  height: 85%;
  place-self: center center;

  > div[data-class='top'] {
    grid-area: 1/1/2/2;
    display: grid;
    grid-template: 1fr / 50% 50%;

    > div[data-class='top__image'] {
      position: relative;
      grid-area: 1/1/2/2;
      border-radius: 1rem;
      overflow: hidden;
      width: 90%;
      height: 90%;
      place-self: center center;
    }

    > div[data-class='top__catInfo'] {
      grid-area: 1/2/2/3;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 1.3rem;
      height: 60%;
      place-self: center center;
    }
  }

  > div[data-class='bottom'] {
    grid-area: 2/1/3/2;
    font-size: 1.6rem;
    padding: 1rem 1.6rem;
    white-space: pre-line;
    line-height: 1.6;

    > h2 {
      margin: 0 0 1rem 0;
    }
  }
`;

export default StyledDiv;
