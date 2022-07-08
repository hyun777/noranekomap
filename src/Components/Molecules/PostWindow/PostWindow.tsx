import StyledDiv, { StyledH2 } from './style';
import PostForm from '../../Atoms/Forms/PostForm/PostForm';

function PostWindow() {
  return (
    <StyledDiv>
      <StyledH2>POST</StyledH2>
      <PostForm />
    </StyledDiv>
  );
}

export default PostWindow;
