import React from "react";


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from './login/Login'
import Teste from './teste/Teste'



export function Routes () {
    return(
    <BrowserRouter>
        <Switch>
             <Route  path="/" exact component= {login} />
             <Route  path="/teste" component= {Teste} />
        </Switch>
    </BrowserRouter>
  );
}



export default Route;