import styled from 'styled-components';

const StyledCardList = styled.div`
  grid-area: ${({ theme }) => theme.CardList['grid-area']};
  overflow-x: hidden;
  overflow-y: scroll;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem 1rem;
  margin: 0 0 1.5rem 0;
  box-sizing: border-box;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default StyledCardList;
