import React from "react";
import AboutMe from "./AboutMe";

function Main(props) {
  if (props.mainId === "aboutme") {
    return <AboutMe />;
  } else if (props.mainId === "portfolio") {
    return "portfolio";
  } else if (props.mainId === "resume") {
    return "resume";
  } else if (props.mainId === "contact") {
    return "contact";
  }
}

export default Main;
