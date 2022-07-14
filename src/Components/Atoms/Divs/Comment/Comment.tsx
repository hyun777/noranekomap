import { RootState } from '../../../../store/modules/rootReducer';
import { useSelector } from 'react-redux';
import StyledDiv from './style';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import GlobalLoading from '../GlobalLoading/GlobalLoading';

function Comment({ data: { comments } }: any) {
  const router = useRouter();
  const { userId } = useSelector((state: RootState) => state.user.userInfo);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [newComments, setNewComments] = useState<any>([]);
  useEffect(() => {
    if (containerRef.current !== null) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [newComments]);

  async function submitComment() {
    if (inputRef.current !== null) {
      const inputValue = inputRef.current.value;
      const { id } = router.query;
      const {
        data: { success, payload },
      } = await axios({
        method: 'POST',
        url: `/api/posts/comments/${id}`,
        data: {
          userId,
          comment: inputValue,
        },
      });
      if (!success) return alert('コメント作成に失敗しました。');

      inputRef.current.value = '';
      inputRef.current.focus();
      setNewComments(payload);
    }
  }
  return (
    <StyledDiv ref={containerRef}>
      <div data-class='comment'>
        <h2>{'< COMMENTS >'}</h2>
        <ul>
          {newComments.length
            ? newComments.map((item: any, index: number) => {
                return (
                  <li key={item._id}>
                    <div>
                      <span>{item.userId} </span>
                      <span>
                        {new Date(item.created_at).toLocaleString('ja')}
                      </span>
                    </div>
                    <p>{item.comment}</p>
                  </li>
                );
              })
            : comments.map((item: any, index: number) => {
                return (
                  <li key={item._id}>
                    <div>
                      <span>{item.userId} </span>
                      <span>
                        {new Date(item.created_at).toLocaleString('ja')}
                      </span>
                    </div>
                    <p>{item.comment}</p>
                  </li>
                );
              })}
        </ul>
      </div>
      <form
        data-class='input'
        onSubmit={(e) => {
          e.preventDefault();
          submitComment();
        }}
      >
        <input
          type='text'
          autoFocus={userId ? true : false}
          disabled={userId ? false : true}
          value={userId ? undefined : 'ログインが必要です。'}
          ref={inputRef}
        />

        <button disabled={userId ? false : true}>入力</button>
      </form>
      <GlobalLoading data-class='comments' />
    </StyledDiv>
  );
}

export default Comment;
