import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";

export class coordenacao extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems);
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
                href=" #"
                data-target="dropdown1"
              >
                {" "}
                <i className="material-icons">menu</i>
              </a>
              <ul id="dropdown1" class="dropdown-content">
                <li>
                  <a href="/teste">Criar requisições</a>
                </li>
                <li>
                  <a href="/listar-req">Listar requisições</a>
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
                <a href="/listar-req">Listar requisições</a>
              </li>
              <li>
                <a href="aa.html">Ajuda</a>
              </li>
            </ul>
          </div>
        </nav>

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
                <a class="waves-effect green lighten-2 btn bt1 col s12">
                  Aprovar
                </a>
              </div>
            </div>

            <div className="container">
              <div className="col s12">
                <a class="waves-effect green lighten-2 btn bt2 col s12">
                  Recusar
                </a>
              </div>
            </div>

            <div className="container">
              <div className="col s12">
                <textarea
                  className="text"
                  rows="100"
                  cols="100"
                  placeholder="Justificativa:"
                  name="observacoes"
                  type="text"
                />
              </div>
            </div>
            <a href="/coordlist" className="waves-effect red lighten-2 bt3 btn">
              Voltar
            </a>
          </div>
        </div>

        <footer className="page-footer  grey darken">
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
                      class="black-text"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ifpejaboatao/"
                      class="black-text"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://br.linkedin.com/school/ifpe-jaboatao/"
                      class="black-text"
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

export default coordenacao;
