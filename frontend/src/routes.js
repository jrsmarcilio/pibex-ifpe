import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/home";

import Register from "./pages/register/register";

import Requeriments from "./pages/Requeriments/requeriments";
import Listrequeriments from "./pages/Listrequeriments/listrequeriments";

import Coordenacao from "./pages/coordenação/Coordenacao";
import Coordlist from "./pages/coordlist/Coordlist";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />

        <Route path="/register" component={Register} />

        <Route path="/requerimentos" component={Requeriments} />


        <Route path="/listarequerimentos" component={Listrequeriments} />

        <Route path="/coordlist" component={Coordlist} />
        <Route path="/coordenacao" component={Coordenacao} />
      </Switch>
    </BrowserRouter>
  );
}

export default Route;
