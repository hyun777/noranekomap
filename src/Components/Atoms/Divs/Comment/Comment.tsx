import StyledDiv from './style';

function Comment() {
  return (
    <StyledDiv>
      <div data-class='comment'>
        <h2>{'< COMMENTS >'}</h2>
        <ul></ul>
      </div>
      <input type='text' data-class='input' />
    </StyledDiv>
  );
}

export default Comment;
