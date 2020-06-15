import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 700px;
  animation: ${fadeIn} 2s ease-in;
`;

export default Container;
