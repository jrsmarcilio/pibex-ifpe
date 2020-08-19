import React from "react";


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from './login/Login'
import Teste from './teste/Teste'
import Firstacess from './firstacess/Firstacess'
import List from "./list/list";
import Home from "./home/Home";



export function Routes () {
    return(
    <BrowserRouter>
        <Switch>
             <Route  path="/" exact component= {login} />
             <Route path="/home" component= {Home} /> 
             <Route  path="/teste" component= {Teste} />
             <Route path="/Primeiroacesso" component= {Firstacess} />
             <Route path="/Lista" component= {List} />
        </Switch>
    </BrowserRouter>
  );
}



export default Route;