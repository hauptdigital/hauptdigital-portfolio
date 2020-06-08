import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    90% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const LinkList = styled.div`
  /*animation: ${fadeIn} 5s ease-in;*/
  margin-left: -1rem;
  max-width: 600px;
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;

export default LinkList;
