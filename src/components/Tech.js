import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TechItem = styled.div`
  flex-basis: 33%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TechName = styled.span``;

const TechIcon = styled.img`
  height: 75px;
  padding: 10px;
`;

function Tech(props) {
  return (
    <TechItem>
      <TechIcon src={require(`../assets/${props.technology}.svg`)} />
      <TechName>{props.name}</TechName>
    </TechItem>
  );
}

Tech.propTypes = {
  technology: PropTypes.string,
  name: PropTypes.string,
};

export default Tech;
