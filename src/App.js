import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [mainId, setMainId] = useState("aboutMe");

  const setActivePage = (id) => {
    console.log("Portfolio.js setActivePage called ...", id);
    setMainId(id);
  };
  return (
    // <React.Fragment>
    //   <Header setActivePage={setActivePage} />
    //   {
    <Router>
      <Routes>
        <Route path='/' element={<AboutMe />}></Route>
        <Route path='/#aboutme' element={<AboutMe />}></Route>
        <Route path='/#portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route component={<AboutMe />}></Route>
      </Routes>
    </Router>
    // }
    // {/* <Main mainId={mainId} />
    //   <Footer />
    // </React.Fragment> */}
  );
}

export default App;
