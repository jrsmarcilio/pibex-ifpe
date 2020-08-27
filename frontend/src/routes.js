import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

import request2ndcall from "./pages/request2ndcall/request2ndcall";
import list2ndcall from "./pages/list2ndcall/list2ndcall";

import Coordenacao from "./pages/coordenação/Coordenacao";
import Coordlist from "./pages/coordlist/Coordlist";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={home} />
        <Route path="/register" component={Register} />

        <Route path="/2ndcall" component={request2ndcall} />
        <Route path="/list2ndcall" component={list2ndcall} />

        <Route path="/coordlist" component={Coordlist} />
        <Route path="/coordenacao" component={Coordenacao} />
      </Switch>
    </BrowserRouter>
  );
}

export default Route;
