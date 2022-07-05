import { useEffect, useRef } from 'react';
import StyledForm, { StyledButton } from './style';
import { checkEmptyInput } from '../../../../utils/formCheck';
import { toggleGlobalLoading } from '../../../../store/modules/global';
import { RootState } from '../../../../store/modules/rootReducer';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { globalLoading } = useSelector((state: RootState) => state.global);

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const refArray = [idRef, passwordRef];

  useEffect(() => {
    if (idRef.current !== null) {
      idRef.current.focus();
    }
  }, []);

  async function loginHandler() {
    if (globalLoading) return;

    dispatch(toggleGlobalLoading(true));
    if (idRef.current !== null && passwordRef.current !== null) {
      // blur input
      idRef.current.blur();
      passwordRef.current.blur();

      const idInputValue = idRef.current.value;
      const passwordInputValue = passwordRef.current.value;

      const {
        data: { success, payload },
      } = await axios({
        method: 'POST',
        url: '/api/login',
        data: { id: idInputValue, password: passwordInputValue },
      });

      dispatch(toggleGlobalLoading(false));
      // when login failed
      idRef.current.value = '';
      passwordRef.current.value = '';
      idRef.current.focus();
      if (!success) return alert('ログインに失敗しました。');

      localStorage.setItem('accessToken', payload.accessToken);
      localStorage.setItem('refreshToken', payload.refreshToken);

      // redirect to index page
      router.push('/');
    }
  }

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();

        // check empty inputs
        if (!checkEmptyInput(refArray)) return;

        // all check ok!
        loginHandler();
      }}
    >
      <input type='text' placeholder='ID' ref={idRef} autoFocus />
      <input type='password' placeholder='PASSWORD' ref={passwordRef} />
      <StyledButton type='submit'>SIGN IN</StyledButton>
    </StyledForm>
  );
}

export default LoginForm;
