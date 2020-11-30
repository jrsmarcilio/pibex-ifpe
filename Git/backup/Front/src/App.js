import React from "react";

import { Routes } from "./routes";

import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/js/materialize";
import "./pages/Requeriments/style.css";
import "./pages/Login/style.css";
import "materialize-css";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;