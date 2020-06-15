import React from 'react';
import Tech from './Tech';
import styled from '@emotion/styled';

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const technologies = {
  javaScript: { name: 'JavaScript', fileName: 'javascript' },
  mongoDb: { name: 'MongoDB', fileName: 'mongodb' },
  storybook: { name: 'Storybook', fileName: 'storybook' },

  react: { name: 'React', fileName: 'react' },
  html5: { name: 'HTML5', fileName: 'html5' },
  styledComponents: {
    name: 'Styled-components',
    fileName: 'styled-components',
  },

  nodeJs: { name: 'Node.JS', fileName: 'node-dot-js' },
  css3: { name: 'CSS3', fileName: 'css3' },
  sass: { name: 'SASS', fileName: 'sass' },

  webpack: { name: 'Webpack', fileName: 'webpack' },
  jQuery: { name: 'jQuery', fileName: 'jquery' },
  adobeXd: { name: 'Adobe XD', fileName: 'adobexd' },
};

function TechList() {
  return (
    <TechGrid>
      {Object.values(technologies).map((technology) => (
        <Tech
          key={technology.name}
          name={technology.name}
          technology={technology.fileName}
        />
      ))}
    </TechGrid>
  );
}

export default TechList;
