import Description from '../../Atoms/Divs/Description/Description';
import Comment from '../../Atoms/Divs/Comment/Comment';
import StyledDiv from './styled';

function DetailMain({ data }: any) {
  return (
    <StyledDiv>
      <Description data={data} />
      <Comment data={data} />
    </StyledDiv>
  );
}

export default DetailMain;
