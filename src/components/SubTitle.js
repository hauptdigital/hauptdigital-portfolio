import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactComponent as FreelanceWebDevelopmentText } from '../assets/FreelanceWebDevelopmentText.svg';

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

const SubTitle = styled(FreelanceWebDevelopmentText)`
  width: 100%;
  margin: 2rem 0;
  animation: ${fadeIn} 5s ease-in;
`;

export default SubTitle;
