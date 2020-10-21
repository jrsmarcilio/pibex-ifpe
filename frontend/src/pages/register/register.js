/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import M from "materialize-css";
import "./style.css";

export class register extends Component {
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
            <a id="logo-container" href="*" className="brand-logo">IFPE</a>

            <a href="aa.html" data-target="nav-mobile" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
              <a className="dropdown-trigger btn light-green darken-4 "
                href="*"
                data-target="dropdown1">
                {" "}
                <i className="material-icons">menu</i>
              </a>

              <ul id="dropdown1" className="dropdown-content">
                <li><a href="aa.html">Ajuda</a></li>
              </ul>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li><a href="aa.html">Ajuda</a></li>
            </ul>
          </div>
        </nav>

        <div className="row container">
          <div className="col s12 " id="First">
            <p className="flow-text black-text text-darken-4 center">
              Primeiro Acesso
            </p>
            <div className="input-field col s6">
              <i className="material-icons prefix">mail_outline</i>
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Insira seu Email
              </span>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">perm_identity</i>
              <input id="input_text" type="text" className="validate" />
              <label htmlFor="input_text">Matricula</label>
            </div>
            <div className="container">
              <div className="col s12">
                <a
                  href="/home"
                  className="btn waves-effect green lighten-2 col s11"
                >
                  Logar
                </a>
              </div>
            </div>
          </div>
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

export default register;
