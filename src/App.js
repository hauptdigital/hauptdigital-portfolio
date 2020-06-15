import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import Container from './components/Container';
import ProfileBox from './components/ProfileBox';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <ProfileBox />
      </Container>
    </ThemeProvider>
  );
}

export default App;
