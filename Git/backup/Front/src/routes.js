import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";

import Login from "./pages/Login";
import Home from "./pages/Home";

import Register from "./pages/Register";

import Requeriments from "./pages/Requeriments";
import Requeriment from "./pages/userRequeriment";

import allRequeriments from "./pages/AllRequeriments";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/header" exact component={Header} />

        <Route path="/login" exact component={Login} />
        <Route path="/home" component={Home} />

        <Route path="/reg" component={Register} />

        <Route path="/requeriments" component={Requeriments} />
        <Route path="/requeriment/:id" component={Requeriment} />

        <Route path="/allRequeriments" component={allRequeriments} />
      </Switch>
    </BrowserRouter>
  );
}

export default Route;
