import React from 'react';
import { Container } from 'style/Background';
import { Wrapper, GlobalStyle } from 'style/style';
import Clock from 'component/Clock';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Wrapper>
            <Clock />
          </Wrapper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
