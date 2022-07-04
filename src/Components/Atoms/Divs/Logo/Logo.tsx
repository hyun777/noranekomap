import StyledDiv from './style';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Logo() {
  const router = useRouter();

  function moveIndexPage() {
    router.push('/');
  }
  return (
    <StyledDiv>
      <Image
        src='/images/logo.png'
        alt='Picture of the author'
        layout='fill'
        objectFit='contain'
        priority
        onClick={() => {
          moveIndexPage();
        }}
      />
    </StyledDiv>
  );
}

export default Logo;
