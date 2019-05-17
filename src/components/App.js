import React, { Component, Fragment } from "react";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
