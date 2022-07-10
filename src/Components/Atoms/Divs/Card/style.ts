import styled from 'styled-components';

const StyledCard = styled.div`
  display: grid;
  grid-template: 1fr / 30% 70%;
  width: 100%;
  margin: 0 0 1rem 0;
  height: fit-content;
  user-select: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &[data-selected='true'] {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
  }

  > div[data-class='left'] {
    grid-area: 1/1/2/2;
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 1rem;
    overflow: hidden;
  }

  > div[data-class='right'] {
    grid-area: 1/2/2/3;
    padding: 0 0 0 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;

    > div[data-class='right__detail'] {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      border-top: 2.5rem solid transparent;
      border-bottom: 2.5rem solid black;
      border-left: 2.5rem solid transparent;
      border-right: 2.5rem solid black;
      border-bottom-right-radius: 1rem;
      color: white;

      &:hover {
        border-bottom: 2.5rem solid green;
        border-right: 2.5rem solid green;
      }

      > p {
        position: absolute;
        top: 0.5rem;
        width: 3rem;
      }
    }
  }
`;

export default StyledCard;
