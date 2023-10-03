import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import 'modern-normalize';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
