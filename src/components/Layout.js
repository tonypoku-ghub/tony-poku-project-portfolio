import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    max-width: 100vw;
    max-height: 100vh;
    background-color: white;
    padding: 0;
  }
`;
function Layout(props) {
  return (
    <Styles>
      <Container>{props.children}</Container>
    </Styles>
  );
}

export default Layout;
