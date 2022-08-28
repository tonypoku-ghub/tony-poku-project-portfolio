import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    min-height: 80vh;
    // border: 1pt red solid;
  }
`;

function Main(props) {
  let page;
  if (props.mainId === "aboutme") {
    page = <AboutMe />;
  } else if (props.mainId === "portfolio") {
    page = <Portfolio />;
  } else if (props.mainId === "resume") {
    page = <Resume />;
  } else if (props.mainId === "contact") {
    page = <Contact />;
  }

  return (
    <Styles name='Main' id='Main'>
      <Container>{page}</Container>
    </Styles>
  );
}

export default Main;
