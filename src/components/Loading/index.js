import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Loading = styled.div`
  animation: ${spin} 0.6s linear infinite;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid #3b1bf2;
  border-radius: 50%;
  height: 2.2rem;
  width: 2.2rem;
  position: absolute;
  top: 40%;
  left: 50%;
`;

export default Loading;
