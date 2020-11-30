import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login/";
import Home from "./pages/Home/index";

import Register from "./pages/Register/";

import Requeriments from "./pages/Requeriments/requeriments";
import Listrequeriments from "./pages/Listrequeriments/listrequeriments";

import Coordenacao from "./pages/coordenacao/Coordenacao";
import Coordlist from "./pages/coordlist/Coordlist";
import Abono from "./pages/Requeriments/abono";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/requerimentos" component={Requeriments} />
        <Route path="/register" component={Register} />
        <Route path="/requerimentos" component={Requeriments} />
        <Route path="/Abono" component={Abono} />
        <Route path="/listarequerimentos" component={Listrequeriments} />
        <Route path="/coordlist" component={Coordlist} />
        <Route path="/coordenacao/:id" component={Coordenacao} />
      </Switch>
    </BrowserRouter>
  );
}

export default Route;
