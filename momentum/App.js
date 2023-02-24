import React from 'react';
import Login from 'component/Login';
import Home from 'Home';
import { Container } from 'style/Background';
import { Wrapper, GlobalStyle } from 'style/style';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';

const App = () => {
  const savedUsername = localStorage.getItem('username');
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Wrapper>
            {savedUsername === null ? (
              <Login />
            ) : (
              <Home savedUsername={savedUsername} />
            )}
          </Wrapper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
