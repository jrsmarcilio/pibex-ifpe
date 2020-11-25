/* eslint-disable no-undef */
import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";
import DateRanger from '../../components/DateRange.js'

//import axios from "axios";

export class Abono extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matricula: "",
      curso: "",
      dia_ausente: "",
      observacoes: "",
      docAnexo: "",
      date: null,
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

    console.log(this.state);
    // axios
    //   .post("http://localhost:3001/newreq", this.state)
    //   .then(function (response) {
    //     alert("Requerimento encaminhado com sucesso!");
    //   })
    //   .catch(function (error) {
    //     alert(error, "Falha no envio do requerimento, tente novamente!");
    //   });
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
                <option value="Abono Falta" selected> Abono de falta</option>
              </select>
            </div>

            <div className="input-field col s12 m6">

              <DateRanger />

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
              href="/listarequerimentos"
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


export default Abono;