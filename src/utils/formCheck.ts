import { RefObject } from 'react';

export function checkEmptyInput(
  refArray: RefObject<HTMLInputElement | HTMLTextAreaElement>[]
) {
  const result = refArray.find((ref, index) => {
    return ref.current === null;
  });
  if (result === undefined) {
    const targetRef = refArray.find((ref, index) => {
      if (ref.current === null) return;

      return ref.current.value === '';
    });

    if (targetRef === undefined) return true;

    if (targetRef.current !== null) {
      targetRef.current.focus();
      return false;
    }
  }
}

export function checkTwoInputValueMatch(
  firstRef: RefObject<HTMLInputElement>,
  secondRef: RefObject<HTMLInputElement>
) {
  if (firstRef.current !== null && secondRef.current !== null) {
    if (firstRef.current.value !== secondRef.current.value) {
      alert('パスワードが一致していません。');
      firstRef.current.value = '';
      secondRef.current.value = '';
      firstRef.current.focus();
      return false;
    }

    return true;
  }
}
