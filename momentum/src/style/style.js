import styled, { createGlobalStyle } from "styled-components";

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

body {
  font-family: "Noto Serif KR", serif;
  font-size: 1.6rem;
  color: #000;
  line-height: 1.5;
  text-align: center;
  overflow: hidden;
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

export const ClockStyle = styled.h2`
  font-size: 8rem;
  font-weight: 700;
  text-align: center;
  padding: 20px 0 50px;

  @media ${(props) => props.theme.tablet} {
    padding: 0 0 30px;
    font-size: 6rem;
  }
`;

export const Greeting = styled.h2`
  text-align: center;
  font-size: 3rem;

  @media ${(props) => props.theme.tablet} {
    font-size: 2.4rem;
  }
`;

export const QuotesStyle = styled.div`
  position: absolute;
  left: 50%;
  bottom: -50px;
  transform: translateX(-50%);
  width: 80%;

  @media ${(props) => props.theme.mobile} {
    bottom: -10px;
    width: 90%;
  }
`;

export const QuoteStyle = styled.p`
  font-style: italic;
  font-weight: 600;

  @media ${(props) => props.theme.mobile} {
    font-size: 1.4rem;
  }
`;

export const AutherStyle = styled.p`
  font-size: 1.4rem;
  padding-top: 10px;
`;

export const TodoForm = styled.form`
  margin-top: 40px;
`;

export const TodoInput = styled.input`
  display: inline-block;
  width: 420px;
  padding: 5px 0;
  text-align: center;
  font-family: "Noto Serif KR", serif;
  border-bottom: 1px solid #222;
  background: transparent;
  font-size: 1.6rem;

  @media ${(props) => props.theme.mobile} {
    width: 60%;
    text-align: center;
  }
`;

export const List = styled.ul`
  padding: 20px 0;
  margin: 0 auto;
  width: 500px;
  text-align: left;

  @media ${(props) => props.theme.tablet} {
    width: 65%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 72%;
  }

  @media (max-width: 420px) {
    width: 80%;
  }

  @media (max-width: 390px) {
    width: 82%;
  }
`;

export const ListObj = styled.li`
  padding: 3px 0;
`;

export const SubmitBtn = styled.button`
  display: inline-block;
  padding: 5px 20px;
  background: #222;
  color: #fff;
  font-family: "Noto Serif KR", serif;
  border: 1px solid #222;
  text-align: center;
  margin-left: 10px;
  font-size: 1.6rem;
`;

export const Btn = styled.button`
  background: transparent;
  font-family: "Noto Serif KR", serif;
  border: 0;
  margin-right: 10px;
  font-size: 1.4rem;
`;
