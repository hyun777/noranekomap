import { useRef, useEffect } from 'react';
import StyledForm, { StyledButton } from './style';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGlobalLoading } from '../../../../store/modules/global';
import { useRouter } from 'next/router';
import { RootState } from '../../../../store/modules/rootReducer';
import {
  checkEmptyInput,
  checkTwoInputValueMatch,
} from '../../../../utils/formCheck';

function SignUpForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { globalLoading } = useSelector((state: RootState) => state.global);

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const inputRefArray = [idRef, passwordRef, passwordConfirmRef];

  useEffect(() => {
    if (idRef.current !== null) {
      idRef.current.focus();
    }
  }, []);

  async function signUpHandler() {
    if (globalLoading) return;

    if (
      idRef.current !== null &&
      passwordRef.current !== null &&
      passwordConfirmRef.current !== null
    ) {
      const idInputValue = idRef.current.value;
      const passwordInputValue = passwordRef.current.value;

      // blur all inputs
      idRef.current.blur();
      passwordRef.current.blur();
      passwordConfirmRef.current.blur();

      dispatch(toggleGlobalLoading(true));
      try {
        const { data } = await axios({
          method: 'POST',
          url: '/api/users',
          data: { id: idInputValue, password: passwordInputValue },
        });
        dispatch(toggleGlobalLoading(false));

        switch (data.error) {
          case 'IDduplication':
            if (idRef.current !== null) {
              idRef.current.value = '';
              idRef.current.focus();
            }
            return alert('既に存在しているIDです。他のIDを入力してください。');
            break;
        }

        if (!data.success) return alert('登録に失敗しました。');

        alert('登録に成功しました!ログイン画面に戻ります。');
        router.push('/login');
      } catch (error) {
        dispatch(globalLoading(false));

        alert('登録に失敗しました。');
      }
    }
  }

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();

        // check empty inputs
        if (!checkEmptyInput(inputRefArray)) return;

        // check password confirm
        if (!checkTwoInputValueMatch(passwordRef, passwordConfirmRef)) return;

        // all check ok!
        signUpHandler();
      }}
    >
      <input
        type='text'
        placeholder='ID < 英字で始まる6~10桁 >'
        pattern='^[a-z]+[a-z0-9]{5,9}$'
        maxLength={10}
        autoFocus
        ref={idRef}
      />
      <input
        type='password'
        placeholder='PASSWORD < 英数字を含め6~10桁 >'
        pattern='^(?=.*[a-zA-Z])(?=.*[0-9]).{6,10}$'
        maxLength={10}
        ref={passwordRef}
      />
      <input
        type='password'
        placeholder='PASSWORD CONFIRM'
        pattern='^(?=.*[a-zA-Z])(?=.*[0-9]).{6,10}$'
        maxLength={10}
        ref={passwordConfirmRef}
      />
      <StyledButton type='submit'>SIGN UP</StyledButton>
    </StyledForm>
  );
}

export default SignUpForm;
