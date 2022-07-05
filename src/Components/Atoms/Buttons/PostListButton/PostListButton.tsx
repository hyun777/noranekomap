import StyledButton from './style';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../../store/modules/user';
import { useRouter } from 'next/router';

function PostListButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  return <StyledButton>投稿リスト</StyledButton>;
}

export default PostListButton;
