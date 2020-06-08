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
  margin: auto;
  width: 100%;
  max-width: 700px;
  /*animation: ${fadeIn} 5s ease-in;*/
`;

export default Container;
