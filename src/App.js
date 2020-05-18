import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import Container from './components/Container';
import BrandLogo from './components/BrandLogo.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <BrandLogo />
      </Container>
    </ThemeProvider>
  );
}

export default App;
