import React, { Component } from "react";
import { api } from "../../api/api";
import FormData from "form-data";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";

export class Teste extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      type_requeriment: "",
      discipline: "",
      test_date: "",
      comments: "",
      file: "",
    };
  }

  handleChange(event) {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
    console.log(this.state.file);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const file = document.getElementById("#file");

    data.append("type_requeriment", this.state.type_requeriment);
    data.append("discipline", this.state.discipline);
    data.append("test_date", this.state.test_date);
    data.append("comments", this.state.comments);
    data.append("file", file.files[0]);

    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjAwODM4NjE2LCJleHAiOjE2MDE0NDM0MTZ9.UBh9NNK3jex8WJkk-bCQGwRYrs2p97YjL9FiGfa2sCU",
    };

    api
      .post("/segchama", data, {
        headers: headers,
      })
      .then(function (response) {
        alert("Requerimento encaminhado com sucesso!");
      })
      .catch(function (error) {
        alert(error, "Falha no envio do requerimento, tente novamente!");
      });
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems);
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems);
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems);
    });
  }

  render() {
    return (
      <div>
        <nav className="light-green darken-4" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href=" " className="brand-logo">
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
              <a
                className="dropdown-trigger btn light-green darken-4 "
                href=" #"
                data-target="dropdown1"
              >
                {" "}
                <i className="material-icons">menu</i>
              </a>
              <ul id="dropdown1" className="dropdown-content">
                <li>
                  <a href="/2ndcall">Criar requisições</a>
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
                <a href="#!">Listar requisições</a>
              </li>
              <li>
                <a href="aa.html">Ajuda</a>
              </li>
            </ul>
          </div>
        </nav>
        <br></br>
        <form
          encType="multipart/form-data"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <div className="container row">
            <div className="input-field col s12 m6">
              <select
                name="type_requeriment"
                onChange={this.handleChange}
                value={this.state.type_requeriment}
              >
                <option value="" disabled>
                  Selecionar requerimento
                </option>
                <option value="Segunda Chamada">Segunda chamada</option>
                <option value="Abono de Falta">Abono de Falta</option>
              </select>
            </div>
            <div className="input-field col s12 m6">
              <select
                name="discipline"
                onChange={this.handleChange}
                value={this.state.discipline}
              >
                <option value="" disabled>
                  Selecionar disciplina
                </option>
                <optgroup label="1º periodo">
                  <option value="Desenvolvimento Web I">
                    Desenvolvimento Web I(30H) - VIVIANE
                  </option>
                  <option value="Fundamentos da Informática">
                    Fundamentos da Informática(45H) - SÉRGIO TORRES
                  </option>
                  <option value="Inglês Instrumental">
                    Inglês Instrumental I(30H) - ROBERTA LIMA
                  </option>
                  <option value="Lógica de Programação">
                    Lógica de Programação(75H) - HAVANA
                  </option>
                  <option value="Matemática Aplicada">
                    Matemática Aplicada(45H) - TIAGO MARQUES MADUREIRA
                  </option>
                  <option value="Português Instrumental">
                    Português Instrumental(45H) - ANA JOSIL
                  </option>
                  <option value="Rede de Computadores">
                    Rede de Computadores(60H) - DIEGO DOS PASSOS SILVA
                  </option>
                </optgroup>
              </select>
            </div>
            <div className="input-field col s12 m6">
              <input
                type="date"
                name="test_date"
                value={this.state.test_date}
                onChange={this.handleChange}
              />
              <label htmlFor="datepicker">Data do dia Perdido</label>
            </div>
            <div className="textarea col s12 m6">
              <textarea
                rows="1000"
                cols="1000"
                placeholder="Deixe seu comentário:"
                type="text"
                name="comments"
                value={this.state.comments}
                onChange={this.handleChange}
              />
            </div>

            <div className="textarea col s12 m6">
              <div className="file-field input-field">
                <div className="btn green lighten-2 ">
                  <span>File</span>
                  <input
                    id="#file"
                    type="file"
                    multiple
                    name="file"
                    value={this.state.file}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="file-path-wrapper">
                  <input
                    className="file-path validate"
                    type="text"
                    placeholder="Anexe seus arquivos aqui"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="input-field col s12 m6 l3 center">
            <button
              type="submit"
              value="Enviar"
              className="btn waves-effect green lighten-2 col s12"
            >
              Enviar Requerimento
            </button>
          </div>
        </form>
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

export default Teste;
