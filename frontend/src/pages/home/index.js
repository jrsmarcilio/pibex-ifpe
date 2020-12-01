import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import "./style.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="bt container row col s12">
          <h3> Escolha o seu serviço! </h3>
          <ul>
            <li>
              <a
                href="/requerimentos"
                className="waves-effect green lighten-2 black-text col s9 btn bt1"
              >
                Segunda Chamada
              </a>
            </li>
            <li>
              <a
                href="/Abono"
                className="waves-effect green lighten-2 black-text col s9 btn bt1"
              >
                Abono de Falta
              </a>
            </li>

            <li>
              <a
                href="/listarequerimentos"
                className="waves-effect green lighten-2 btn black-text col s9  bt2"
              >
                Lista requerimentos
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
