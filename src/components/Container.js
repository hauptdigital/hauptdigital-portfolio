import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const fadeIn = keyframes`
    0% {
      background-color: transparent;
    }
    90% {
      background-color: transparent;
    }
    100% {
      background-color: #3D3356;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 100vh;
  animation: ${fadeIn} 5s ease-in;
  background-color: #3d3356;
`;

export default Container;
