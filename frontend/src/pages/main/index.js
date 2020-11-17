import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import "./style.css";

import api from "../../services/api";

export default class Main extends Component {
  state = {
    requerimentos: [],
  };

  loadRequerimentos = async () => {
    const response = await api.get("/listar");

    this.setState({ requerimentos: response.data.data });
    console.log(response.data.data);
  };

  render() {
    const { requerimentos } = this.state;
    return (
      <div>
        <div className="container table">
          <table className="centered striped">
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
            <thead>
              {requerimentos.map((requerimento) => (
                <tr key={requerimento.id_req}>
                  <th> {requerimento.id_user} </th>
                  <th> {requerimento.matricula} </th>
                  <th> {requerimento.data_aval} </th>
                  <th> {requerimento.observacoes} </th>
                  <th>
                    {" "}
                    <button
                      src={requerimento.comprovante}
                      className="waves-effect green lighten-2 btn"
                    >
                      Comprovante
                    </button>{" "}
                  </th>
                  <th> {requerimento.situacao} </th>
                </tr>
              ))}
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
