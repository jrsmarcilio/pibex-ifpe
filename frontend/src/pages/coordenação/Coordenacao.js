import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import "./style.css";

export class coordenacao extends Component {


  render() {
    return (
      <div>
        <div className=" row container">
          <div className="col s12" id="form">
            <div className="container">
              <table className="table">

                <tr>
                  <th>Nome</th>
                  <th>Matricula</th>
                  <th>Curso</th>
                  <th>Turno</th>
                  <th>Observacoes</th>
                </tr>

                <tr>
                  <td>Eduardo Bezerra de barros</td>
                  <td>0123456789</td>
                  <td>Informática para internet</td>
                  <td>Tarde</td>
                  <td>
                    Faltei por algum motivo que ainda não foi explicado pelo o
                    universo, porque junta o presente e o futuro viajando pelo
                    passado.
                  </td>
                </tr>
              </table>

              <div className="col s12">
                <div className="col s12">
                  <textarea
                    className="text"
                    rows="100"
                    cols="100"
                    placeholder="Justificativa:"
                    name="observacoes"
                    type="text" />
                </div>

                <div className="container">

                  <div className="col s6">
                    <a href="" className="waves-effect green lighten-2 btn bt1 col s9">Aprovar </a>
                  </div>


                </div>


                <div className="container">

                  <div className="col s6">
                    <a className="waves-effect green lighten-2 btn bt2 col s9">Recusar</a>
                  </div>

                </div>
              </div>
            </div>

            <a href="/coordlist" className="waves-effect red lighten-2 bt3 btn">Voltar</a>
          </div>
        </div>
      </div>
    );
  }
}

export default coordenacao;
