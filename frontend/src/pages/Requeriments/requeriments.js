import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";

const axios = require("axios");

export class Requeriments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requeriment: "Segunda Chamada",
      discipline: "",
      test_date: "",
      comments: "",
      path: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { discipline, test_date, path, requeriment, comments } = this.state;
    if (discipline === "") {
      M.toast({
        html: "Selecione a disciplina.",
        classes: "red lighten-1",
      });
    } else if (test_date === "") {
      M.toast({
        html: "Selecione a data da avaliação perdida.",
        classes: "red lighten-1",
      });
    } else if (path === "") {
      M.toast({
        html: "Não esqueça de anexar seu atestado.",
        classes: "red lighten-1",
      });
    } else {
      const form = new FormData();
      const path = document.querySelectorAll("#path");

      form.append("requeriment", requeriment);
      form.append("discipline", discipline);
      form.append("test_date", test_date);
      form.append("comments", comments);
      form.append("file", path[0].files[0]);

      let token = localStorage.getItem("token");
      axios
        .post("http://localhost:3333/2ndcall", form, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data;",
          },
        })
        .then((response) => {
          M.toast({
            html: "Requerimento encaminhado com sucesso.",
            classes: "green lighten-1",
          });
          console.log(response);
        })
        .catch((error) => {
          M.toast({
            html: "Algo deu errado.",
            classes: "red lighten-1",
          });
          console.log(error);
        });
    }
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems);
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems);
    });
  }

  render() {
    return (
      <div>
        <form
          action="/2ndcall"
          encType="multipart/form-data"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <div className="container row">
            <div className="input-field col s12 m6">
              <select defaultValue>
                <option selected>Segunda chamada</option>
              </select>
            </div>

            <div className="input-field col s12 m6">
              <select name="discipline" onChange={this.handleChange}>
                <option value="" disabled selected>
                  Selecione a disciplina desejada
                </option>
                <optgroup
                  label="1º periodo"
                  name="discipline"
                  onChange={this.handleChange}
                >
                  <option name="Desenvolvimento Web I">
                    Desenvolvimento Web I(30H) - VIVIANE
                  </option>
                  <option name="Fundamentos da Informática">
                    Fundamentos da Informática(45H) - SÉRGIO TORRES
                  </option>
                  <option name="Inglês Instrumental I">
                    Inglês Instrumental I(30H) - ROBERTA LIMA
                  </option>
                  <option name="Lógica de Programação">
                    Lógica de Programação(75H) - HAVANA
                  </option>
                  <option name="Matemática Aplicada">
                    Matemática Aplicada(45H) - TIAGO MARQUES MADUREIRA
                  </option>
                  <option name="Português Instrumental">
                    Português Instrumental(45H) - ANA JOSIL
                  </option>
                  <option name="Rede de Computadores">
                    Rede de Computadores(60H) - DIEGO DOS PASSOS SILVA
                  </option>
                </optgroup>
              </select>
            </div>

            <div className="input-field col s12 m6">
              <input
                name="test_date"
                type="date"
                value={this.state.test_date}
                onChange={this.handleChange}
              />
              <label htmlFor="datepicker">Data do dia Perdido</label>
            </div>

            <div className="textarea col s12 m6">
              <textarea
                rows="1000"
                cols="1000"
                placeholder="Deixe seu comentário"
                name="comments"
                type="text"
                value={this.state.comments}
                onChange={this.handleChange}
              />
            </div>

            <div className="textarea col s12 m6">
              <div className="file-field input-field">
                <div className="btn green lighten-2 ">
                  <span>File</span>
                  <input
                    type="file"
                    multiple
                    onChange={this.handleChange}
                    name="path"
                    id="path"
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
      </div>
    );
  }
}

export default Requeriments;
