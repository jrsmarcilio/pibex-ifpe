/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { api } from "../../api/api";
import "materialize-css/dist/js/materialize";
import M from "materialize-css";
import "./style.css";

export class Listagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requerimentos: [],
    };
  }

  loadRequerimentos = async () => {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjAwODM4NjE2LCJleHAiOjE2MDE0NDM0MTZ9.UBh9NNK3jex8WJkk-bCQGwRYrs2p97YjL9FiGfa2sCU",
    };

    const response = await api.get("/segchama", {
      headers: headers,
    });
    this.setState({ requerimentos: response.data });
  };

  handleClick = (e) => {
    e.preventDefault();
    alert("Abrindo imagem");
  };

  componentDidMount() {
    this.loadRequerimentos();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    });
  }

  render() {
    const { requerimentos } = this.state;
    return (
      <div>
        <div className="container table">
          <table className="highlight centered ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Disciplina</th>
                <th>Data da prova</th>
                <th>Comentários</th>
                <th>Atestado/Documentação</th>
                <th>Situação</th>
              </tr>
            </thead>
            <thead>
              {requerimentos.map((requerimento) => (
                <tr key={requerimento.id}>
                  <th> {requerimento.id_user} </th>
                  <th> {requerimento.discipline} </th>
                  <th> {requerimento.test_date} </th>
                  <th> {requerimento.comments} </th>
                  <th>
                    <button
                      href={"http://localhost:3333/files/" + requerimento.path}
                      onClick={this.handleClick}
                      class="waves-effect green lighten-2 btn"
                    >
                      Atestado
                    </button>
                  </th>
                </tr>
              ))}
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default Listagem;
