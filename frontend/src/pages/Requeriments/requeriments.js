import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";

const axios = require("axios");

export class Requeriments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matricula: "",
      curso: "",
      dia_ausente: "",
      observacoes: "",
      docAnexo: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name)
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);

  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3001/newreq", this.state)
      .then(function (response) {
        alert("Requerimento encaminhado com sucesso!");
      })
      .catch(function (error) {
        alert(error, "Falha no envio do requerimento, tente novamente!");
      });
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
          action="/newreq"
          enctype="multipart/form-data"
          method="POST"
          onSubmit={this.handleSubmit}>

          <div className="container row">
            <div className="input-field col s12 m6">

              <select name="tipo_requisicao" onChange={this.handleChange}>
                <option value="" disabled selected>Selecione o tipo de requisição</option>
                <option value="SegundaChamada"> Segunda chamada</option>
                <option data-section="AbonoFalta" value="AbonoFalta">Abono de falta</option>
              </select>

            </div>

            <div className="input-field col s12 m6">

              <select>
                <option value="" disabled selected>Selecione a disciplina desejada</option>
                <optgroup label="1º periodo">
                  <option value="1">Desenvolvimento Web I(30H) - VIVIANE</option>
                  <option value="2">Fundamentos da Informática(45H) - SÉRGIO TORRES</option>
                  <option value="3">Inglês Instrumental I(30H) - ROBERTA LIMA</option>
                  <option value="4">Lógica de Programação(75H) - HAVANA</option>
                  <option value="5">Matemática Aplicada(45H) - TIAGO MARQUES MADUREIRA</option>
                  <option value="6">Português Instrumental(45H) - ANA JOSIL</option>
                  <option value="7"> Rede de Computadores(60H) - DIEGO DOS PASSOS SILVA
                  </option>
                </optgroup>
              </select>

            </div>

            <div className="input-field col s12 m6">

              <input
                name="dia_ausente"
                type="date"
                value={this.state.dia_ausente}
                onChange={this.handleChange}
              />
              <label Htmlfor="datepicker">Data do dia Perdido</label>
            </div>

            <div className="textarea col s12 m6">
              <textarea
                rows="1000"
                cols="1000"
                placeholder="Observações:"
                name="observacoes"
                type="text"
                value={this.state.observacoes}
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
                    name="docAnexo"
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
              href="a"
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