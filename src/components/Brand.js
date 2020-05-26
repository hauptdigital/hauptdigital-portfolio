import React from 'react';
import { ReactComponent as BrandTextSVG } from '../assets/BrandText.svg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  max-height: 185px;
`;

const animateText = keyframes`
  0% {
    stroke-dasharray: 561;
    fill: transparent;
  }
  90% {
    stroke-dashoffset: 0; 
    fill: transparent;
  }
  100% {
    stroke-dashoffset: 0;
    fill: #42b899;
  }
`;

const BrandText = styled(BrandTextSVG)`
  margin: 2rem 0;
  width: 100%;
  & > path {
    fill: transparent;
    stroke-dasharray: 561;
    stroke-dashoffset: 561;
    animation: ${animateText} 4s ease forwards 1s;
  }
`;

function Brand() {
  return (
    <BrandContainer>
      <BrandText />
    </BrandContainer>
  );
}
export default Brand;
