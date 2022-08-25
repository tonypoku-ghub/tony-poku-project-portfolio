import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import React, { useState } from "react";
import Jumbo from "./Jumbo";
import Layout from "./Layout";

export default function WebPage() {
  const [mainId, setMainId] = useState("aboutme");

  const setActivePage = (id) => {
    console.log("WebPage.js setActivePage called ...", id);
    setMainId(id);
  };

  return (
    <Layout>
      <Header setActivePage={setActivePage} />
      <Jumbo />
      <Main mainId={mainId} />
      <Footer />
    </Layout>
  );
}
