import React, { useRef } from 'react';
import { ReactComponent as BrandTextSVG } from '../assets/BrandText.svg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

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
  & > path {
    fill: transparent;
    stroke-dasharray: 561;
    stroke-dashoffset: 561;
    animation: ${animateText} 4s ease forwards 2s;
  }
`;

function BrandLogo() {
  const logoText = useRef(null);
  React.useEffect(() => {
    const pathLength = logoText.current.children[0].getTotalLength();
    console.log(pathLength);
  });

  return (
    <>
      <div></div>
      <BrandText ref={logoText} />
    </>
  );
}
export default BrandLogo;
