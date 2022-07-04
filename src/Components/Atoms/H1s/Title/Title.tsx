import React from 'react';
import StyledTitle from './style';
import { useRouter } from 'next/router';

function Title() {
  const router = useRouter();
  function moveIndexPage() {
    router.push('/');
  }

  return (
    <StyledTitle
      onClick={() => {
        moveIndexPage();
      }}
    >
      <span style={{ color: '#61D2BB' }}>中村区</span> 野良猫 マップ 🐈
    </StyledTitle>
  );
}

export default Title;
