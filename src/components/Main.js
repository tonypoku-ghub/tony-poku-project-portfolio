import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

function Main(props) {
  if (props.mainId === "aboutme") {
    return <AboutMe />;
  } else if (props.mainId === "portfolio") {
    return <Portfolio />;
  } else if (props.mainId === "resume") {
    return <Resume />;
  } else if (props.mainId === "contact") {
    return <Contact />;
  }
}

export default Main;
