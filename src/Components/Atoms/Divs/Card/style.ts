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
  }
`;

export default StyledCard;
