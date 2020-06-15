import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyle() {
  return (
    <Global
      styles={(theme) => css`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Open+Sans:wght@300;400;600&display=swap');
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 24px;
          margin: 0;
          font-family: 'Open Sans', sans-serif;
          background-color: ${theme.colors.background};
          color: ${theme.colors.primary};
        }

        body::-webkit-scrollbar-track {
          border-radius: 10px;
          background: transparent;
        }

        body::-webkit-scrollbar {
          width: 10px;
        }

        body::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: ${theme.colors.secondary};
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          color: ${theme.colors.primary};
        }
        a,
        a:hover,
        a:active,
        a:visited {
          color: ${theme.colors.primary};
        }
        p {
          margin: 0;
          padding: 0.5em 0;
        }
      `}
    />
  );
}

export default GlobalStyle;
