import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import "./style.css";

export class Coordlist extends Component {


  render() {
    return (
      <div>
        <div className="container ">
          <table className="highlight centered table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Matricula</th>
                <th>Tipo de requerimento</th>
                <th>Data do requerimento</th>
                <th>Situação</th>
                <th>Opções</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>001</td>
                <td>Joseph Alencar</td>
                <td>20201b310000</td>
                <td>Abono de falta</td>
                <td>20/07/2020</td>
                <td>Em análise</td>
                <td>
                  <a
                    href="/coordenacao"
                    className="waves-effect green lighten-2 btn"
                  >
                    analisar requerimentos
                  </a>
                </td>
              </tr>
              <tr>
                <td>002</td>
                <td>Silvest talonge</td>
                <td>20201b319999</td>
                <td>Segunda chamada</td>
                <td>20/07/2020</td>
                <td>Em análise</td>
                <td>
                  <a
                    href="/coordenacao"
                    className="waves-effect green lighten-2 btn"
                  >
                    analisar requerimentos
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Coordlist;
