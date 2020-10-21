/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import M from "materialize-css";
import "./style.css";

export class Listagem extends Component {
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
        <nav className="light-green darken-4" role="navigation">
          <div className="nav-wrapper container">

            <a id="logo-container" href="/home " className="brand-logo">
              IFPE
            </a>

            <a href="aa.html" data-target="nav-mobile" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
              <a className="dropdown-trigger btn light-green darken-4" href="*" data-target="dropdown1">
              <i className="material-icons">menu</i>
             </a>

           <ul id="dropdown1" className="dropdown-content">
              <li>
                <a href="/home">Home</a>
              </li>

              <li>
                <a href="aa.html">Ajuda</a>
              </li>

             </ul>   
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
                  <a href="#" class="waves-effect green lighten-2 btn">
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
                  <a class="waves-effect green lighten-2 btn">Documento</a>
                </td>
                <td>Em análise</td>
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

export default Listagem;
