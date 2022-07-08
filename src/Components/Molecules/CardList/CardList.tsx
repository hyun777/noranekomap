import StyledCardList from './style';
import Card from '../../Atoms/Divs/Card/Card';

function CardList({ postData }: any) {
  return (
    <StyledCardList>
      {postData.map(
        ({
          thumbnail,
          created_at,
          address,
          catName,
          gender,
          _id,
          userId,
        }: any) => {
          return (
            <Card
              key={_id}
              thumbnail={thumbnail}
              date={created_at}
              address={address}
              catName={catName}
              gender={gender}
              userId={userId}
              _id={_id}
            />
          );
        }
      )}
    </StyledCardList>
  );
}

export default CardList;
