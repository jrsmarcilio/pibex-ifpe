import React from "react";
import { Routes } from "./routes";

import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/js/materialize";
import "materialize-css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
