import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login/";
// import Home from "./pages/Home/index";

import Register from "./pages/Register/";

import Requeriments from "./pages/Requeriments/";
// import allRequeriments from "./pages/AllRequeriments/";

// import Coordenacao from "./pages/coordenação/Coordenacao";
// import Coordlist from "./pages/coordlist/Coordlist";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/requerimentos" component={Requeriments} />
        <Route path="/register" component={Register} />

        {/* <Route path="/home" component={Home} />


        <Route path="/allRequerimentos" component={allRequeriments} />

        <Route path="/coordlist" component={Coordlist} />
        <Route path="/coordenacao" component={Coordenacao} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Route;
