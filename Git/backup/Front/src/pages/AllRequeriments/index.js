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
        <nav className="light-green darken-4" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="/home " className="brand-logo">
              IFPE
            </a>
            <a
              href="aa.html"
              data-target="nav-mobile"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="aa.html">Ajuda</a>
              </li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="aa.html">Ajuda</a>
              </li>
            </ul>
          </div>
        </nav>

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

        <footer className="pagee-footer  grey darken">
          <div className="container">
            <div className="row">
              <div className="col s12 l6">
                <h5> Mais informações:</h5>
              </div>
              <div className="col s12 l4 offset-12">
                <h5>Redes Sociais</h5>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/ifpejaboatao/"
                      className="black-text"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ifpejaboatao/"
                      className="black-text"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://br.linkedin.com/school/ifpe-jaboatao/"
                      className="black-text"
                    >
                      Linked In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyrwright grey darken-3">
            <div className="container center-align">
              &copy; Todos os direitos reservados-2020 PIBEX
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Listagem;
