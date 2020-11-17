
import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import "./style.css";

export class Home extends Component {


  render() {
    return (
      <div>
        <div className="row container">
          <div className="col s12 " id="Login">
            <p className="flow-text black-text text-darken-4 center">
              Faça login com a sua matricula/siape!
            </p>
            <div className="input-field col s6">
              <i className="material-icons prefix">perm_identity</i>
              <input id="input_text" type="text" className="validate" />
              <label htmlFor="input_text">Matricula/Siape</label>
              <span className="helper-text">Insira sua Matricula/Siape</span>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix">lock_outline</i>
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Senha</label>
            </div>

            <div className="col s12 center">
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Lembrar Senha</span>
                </label>
              </p>
            </div>

            <div className="container">
              <div className="col s6">
                <a
                  href="/home"
                  className="btn waves-effect green lighten-2 col s12 "
                >
                  Login
                </a>
              </div>
            </div>

            <div className="container">
              <div className="col s6">
                <a
                  href="/register"
                  className="btn waves-effect green lighten-4 black-text col s12 "
                >
                  {" "}
                  Primeiro acesso!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
