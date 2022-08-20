import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import React, { useState } from "react";

export default function Portfolio() {
  const [mainId, setMainId] = useState("aboutMe");

  const setActivePage = (id) => {
    console.log("Portfolio.js setActivePage called ...", id);
    setMainId(id);
  };

  return (
    <React.Fragment>
      <Header setActivePage={setActivePage} />
      <Main mainId={mainId} />
      <Footer />
    </React.Fragment>
  );
}
