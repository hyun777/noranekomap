import StyledWrapper, { StyledLoading } from './style';

function GlobalLoading({ absolute }: { absolute?: true }) {
  return (
    <StyledWrapper data-absolute={absolute}>
      <StyledLoading></StyledLoading>
    </StyledWrapper>
  );
}

export default GlobalLoading;
