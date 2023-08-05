import React from "react";
import "./App.css";
import Header from "./components/Header";
import Mainbody from "./components/Mainbody";
import Template from "./components/Template";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import FormHeader from "./components/FormHeader";
import CenteredTabs from "./components/Tabs";
import Question_form from "./components/Question_form";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
        <Routes>
          <Route path="/form/:id" element={<div><FormHeader/><CenteredTabs/><Question_form/></div>} />
          <Route path="/" element={<div><Header/><Template/><Mainbody/></div>} />
          {/* <Route path="/" element={<Template/>} />
          <Route path="/" element={<Mainbody/>} /> */}
            {/* <Header />
            <Template />
            <Mainbody /> */}
            </Routes>
          </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
export default App;
