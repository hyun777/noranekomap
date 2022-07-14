import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
  }
`;

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  user-select: none;
  z-index: 999;

  &[data-absolute='true'] {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  &[data-class='comments'] {
    background-color: red;
  }
`;

export const StyledLoading = styled.div`
  width: 30px;
  height: 30px;
  border: 5px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border-top: 5px solid transparent;
  animation: ${loading} 1s linear infinite;
`;

export default StyledWrapper;
