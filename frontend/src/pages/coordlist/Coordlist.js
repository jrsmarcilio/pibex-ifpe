import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import M from "materialize-css";
import "./style.css";

export class Coordlist extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems);
    });
  }

  render() {
    return (
      <div>
        <nav class="light-green darken-4" role="navigation">
          <div class="nav-wrapper container">
            <a id="logo-container" href=" " class="brand-logo">
              IFPE
            </a>

            <a href="aa.html" data-target="nav-mobile" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
              <a
                className="dropdown-trigger btn light-green darken-4 "
                href="#"
                data-target="dropdown1"
              >
                {" "}
                <i className="material-icons">menu</i>
              </a>
              <ul id="dropdown1" class="dropdown-content">
                <li>
                  <a href="/2ndcall">Criar requisições</a>
                </li>
                <li>
                  <a href="/list2ndcall">Listar requisições</a>
                </li>
                <li>
                  <a href="aa.html">Ajuda</a>
                </li>
              </ul>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li>
                <a href="#!">Criar requisições</a>
              </li>
              <li>
                <a href="#!">Listar requisições</a>
              </li>
              <li>
                <a href="aa.html">Ajuda</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container ">
          <table className="highlight centered table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Matricula</th>
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

export default Coordlist;
