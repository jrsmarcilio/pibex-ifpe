/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import M from "materialize-css";
import "./style.css";

import api from "../../services/api";

export default class Main extends Component {
  state = {
    requerimentos: [],
  };

  componentDidMount() {
    this.loadRequerimentos();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    });
  }

  loadRequerimentos = async () => {
    const response = await api.get("/listar");

    this.setState({ requerimentos: response.data.data });
    console.log(response.data.data);
  };

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
                <a href="https://portal.ifpe.edu.br/campus/jaboatao">
                  Site Oficial
                </a>
              </li>
              <li>
                <a href="aa.html">Ajuda</a>
              </li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li>
                <a href="https://portal.ifpe.edu.br/campus/jaboatao">
                  Site Oficial
                </a>
              </li>
              <li>
                <a href="aa.html">Ajuda</a>
              </li>
            </ul>
          </div>
        </nav>

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
