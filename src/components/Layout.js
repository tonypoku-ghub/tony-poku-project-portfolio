import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { ThemeProvider } from "react-bootstrap";

const Styles = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    min-height: 80vh;
    background-color: white;
    padding: 0;
  }
`;

const theme = {
  colors: {
    header: "black",
    body: "#fff",
    footer: "bbb",
  },
};

function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <Styles>
        <Container>{props.children}</Container>
      </Styles>
    </ThemeProvider>
  );
}

export default Layout;
