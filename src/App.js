import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import Container from './components/Container';
import LinkList from './components/LinkList.js';
import Link from './components/Link.js';
import ProfileBox from './components/ProfileBox';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <ProfileBox />
        <LinkList>
          <Link href="https://github.com/hauptdigital/" target="_blank">
            GitHub
          </Link>
          <Link href="https://www.xing.com/profile/Marc_Haupt2" target="_blank">
            XING
          </Link>
          <Link href="https://www.linkedin.com/in/marchaupt2/" target="_blank">
            LinkedIN
          </Link>
          <Link href="mailto:marc@haupt.digital" target="_blank">
            Mail
          </Link>
        </LinkList>
      </Container>
    </ThemeProvider>
  );
}

export default App;
