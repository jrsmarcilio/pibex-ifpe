import React from "react";
import { Routes } from "./routes";

import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/js/materialize";
import "materialize-css";

import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
