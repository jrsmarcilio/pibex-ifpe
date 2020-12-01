/* eslint-disable no-undef */
import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";

import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import axios from "axios";
const moment = extendMoment(originalMoment);

export class Abono extends Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();

    this.state = {
      requeriment: "Abono de Falta",
      comments: "",
      path: "",
      isOpen: false,
      openCalendario: "",
      value: moment.range(today.clone().add(3, "days"), today.clone()),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSelect = (value, states) => {
    this.setState({ value, states });
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderSelectionValue = () => {
    return (
      <div>
        <div>Selecione o Periodo Perdido:</div>
        {this.state.value.start.format("YYYY-MM-DD")}
        {" - "}
        {this.state.value.end.format("YYYY-MM-DD")}
      </div>
    );
  };

  handleChange(event) {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { requeriment, comments } = this.state;
    const start_date = this.state.value.start.format("YYYY-MM-DD");
    const final_date = this.state.value.end.format("YYYY-MM-DD");

    const form = new FormData();
    const path = document.querySelectorAll("#path");

    form.append("requeriment", requeriment);
    form.append("start_date", start_date);
    form.append("final_date", final_date);
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
        console.log(response);
        M.toast({
          html: "Requerimento encaminhado com sucesso.",
          classes: "green lighten-1",
        });
      })
      .catch((error) => {
        console.log(error);
        M.toast({
          html: "Algo deu errado.",
          classes: "red lighten-1",
        });
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
    if (this.state.isOpen === false) {
      this.state.openCalendario = "Abrir Calendário";
    } else {
      this.state.openCalendario = "Fechar Calendário";
    }
    return (
      <div>
        <form
          action="/2ndcall"
          enctype="multipart/form-data"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <div className="container row">
            <div className="input-field col s12 m6">
              <select>
                <option value="Abono Falta" selected>
                  Abono de falta
                </option>
              </select>
            </div>

            <div className="input-field col s12 m6">
              <div>
                <div>{this.renderSelectionValue()}</div>

                <div>
                  <input
                    type="button"
                    value={this.state.openCalendario}
                    onClick={this.onToggle}
                  />
                </div>

                {this.state.isOpen && (
                  <DateRangePicker
                    value={this.state.value}
                    onSelect={this.onSelect}
                    singleDateRange={true}
                  />
                )}
              </div>
            </div>

            <div className="textarea col s12 m6">
              <textarea
                rows="1000"
                cols="1000"
                placeholder="Observações:"
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
                    name="path"
                    id="path"
                    required
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
