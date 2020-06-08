import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import Container from './components/Container';
import ProfileBox from './components/ProfileBox';
import ContentBox from './components/ContentBox';
import TechList from './components/TechList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <ProfileBox />
        <ContentBox>
          <p>
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Hey</span> -
            my name is Marc and I am a Freelance Web Developer from Cologne in
            Germany. I specialize in JavaScript and related web technologies and
            frameworks (React JS, Node.js, Express, MongoDB, RESTful API and
            more).
          </p>
          <p>
            Cornerstones of my work are semantic clean-code, minimalistic
            UI&apos;s, a user-oriented approach and{' '}
            <span style={{ fontWeight: 'bold' }}>yes</span> - documentation.
          </p>
          <p>
            I am always open for web development projects in my area or remote.
            If you have questions, please feel free to contact me.
          </p>
        </ContentBox>
        <ContentBox title="TECHNOLOGY THAT I LIKE TO USE IN PROJECTS">
          <TechList />
        </ContentBox>
      </Container>
    </ThemeProvider>
  );
}

export default App;
