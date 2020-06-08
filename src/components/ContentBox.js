import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import isInViewport from '../utils/isInViewport';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  padding-top: ${(props) => (props.isVisible ? '0' : '20rem')};
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  margin-bottom: 150px;
  transition: 0.7s;
`;

const ContentTitle = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
`;

const Content = styled.div``;

function ContentBox(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  const contentBoxRef = useRef();
  const handleScroll = useCallback((contentBoxRef) => {
    window.addEventListener('scroll', () => {
      if (isInViewport(contentBoxRef)) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    });
  }, []);

  React.useEffect(() => {
    const section = contentBoxRef;
    handleScroll(section.current);
  }, [handleScroll]);

  return (
    <ContentContainer isVisible={isVisible} ref={contentBoxRef}>
      <ContentTitle>{props.title}</ContentTitle>
      <Content>{props.children}</Content>
    </ContentContainer>
  );
}

ContentBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ContentBox;
