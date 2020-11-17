import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import "./style.css";

export class Listrequeriments extends Component {


  render() {
    return (
      <div>
        <div className="container table">
          <table className="highlight centered ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Matricula</th>
                <th>Data do requerimento</th>
                <th>Observações</th>
                <th>Comprovante</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>001</td>
                <td>20201b310000</td>
                <td>20/07/2020</td>
                <td>
                  Faltei por algum motivo que ainda não foi explicado pelo o
                  universo, porque junta o presente e o futuro viajando pelo
                  passado.
                </td>
                <td>
                  <a href="*" class="waves-effect green lighten-2 btn">
                    Documento
                  </a>
                </td>
                <td>Em análise</td>
              </tr>
              <tr>
                <td>001</td>
                <td>20201b310000</td>
                <td>20/07/2020</td>
                <td className="Text">
                  Faltei por algum motivo que ainda não foi explicado pelo o
                  universo, porque junta o presente e o futuro viajando pelo
                  passado.
                </td>
                <td>
                  <a href="*" class="waves-effect green lighten-2 btn">Documento</a>
                </td>
                <td>Em análise</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Listrequeriments;
