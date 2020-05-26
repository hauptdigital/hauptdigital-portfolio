import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../theme';

const animateUnderline = keyframes`
  all 1s ease-in-out;
`;

const Link = styled.a`
  padding: 0.5rem;
  margin: 0.5rem 0.5rem;
  background-color: #ffffff47;
  text-decoration: none;
  transition: ${animateUnderline};
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 0px;
    height: 5px;
    margin: 5px 0 0;
    transition: $animate;
    transition-duration: 0.75s;
    opacity: 0;
    background-color: ${theme.colors.secondary};
  }
  &:hover {
    background-color: #ffffff99;
    &:before {
      content: '';
      width: 100%;
      opacity: 1;
    }
  }
`;

export default Link;
