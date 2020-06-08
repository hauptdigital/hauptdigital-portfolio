import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  height: 75vh;
`;

const ContentTitle = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
`;

const Content = styled.div``;

function ContentBox(props) {
  return (
    <ContentContainer>
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
