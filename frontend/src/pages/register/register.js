/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import "./style.css";

export class register extends Component {

  render() {
    return (
      <div>
        <div className="row container">
          <div className="col s12 " id="First">
            <p className="flow-text black-text text-darken-4 center">
              Primeiro Acesso
            </p>
            <div className="input-field col s6">
              <i className="material-icons prefix">mail_outline</i>
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Insira seu Email
              </span>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">perm_identity</i>
              <input id="input_text" type="text" className="validate" />
              <label htmlFor="input_text">Matricula/Siape</label>
            </div>
            <div className="container">
              <div className="col s12">
                <a
                  href="/home"
                  className="btn waves-effect green lighten-2 col s12"
                >
                  Logar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default register;
