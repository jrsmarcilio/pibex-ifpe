import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import "./style.css";

export class Home extends Component {


  render() {
    return (
      <div>
        <div className="bt container row col s12">
          <ul>
            <li>
              <a
                href="/requerimentos"
                className="waves-effect green lighten-2 black-text col s9 btn bt1">Criar requisições
              </a>
            </li>

            <li>
              <a
                href="/listarequerimentos"
                className="waves-effect green lighten-2 btn black-text col s9  bt2">Listar requisições</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
