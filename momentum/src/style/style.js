import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

table {
  border-collapse: collapse;
  width: 100%;
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #222;
}

address,
em,
i {
  font-style: normal;
}

fieldset,
input,
select {
  border: 0;
  vertical-align: middle;
  outline: 0;
}

legend,
caption {
  display: none;
}

  }
`;

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  width: 60vw;
  height: 70vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media ${(props) => props.theme.tablet} {
    width: 80vw;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100vw;
    height: 80vh;
  }
`;
