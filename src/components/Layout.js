import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    min-height: 100vh;
    background-color: white;
    padding: 0;
    // border: 1pt red solid;
  }
`;

function Layout(props) {
  return (
    <Styles name='Layout' id='Layout'>
      <Container>{props.children}</Container>
    </Styles>
  );
}

export default Layout;
