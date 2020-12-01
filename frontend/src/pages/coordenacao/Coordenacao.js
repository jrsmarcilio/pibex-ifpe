import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";

import axios from "axios";

export class Coordlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requeriments: {},
      comments: "",
      okay: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDef = this.handleDef.bind(this);
    this.handleIndef = this.handleIndef.bind(this);
  }

  handleDef() {
    this.setState({ okay: true });
  }
  handleIndef() {
    this.setState({ okay: false });
  }

  handleChange(event) {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { comments, okay } = this.state;
    const id = this.props.match.params.id;
    const situation = { comments, okay, id };
    axios
      .put("http://localhost:3333/2ndcall", situation, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        M.toast({
          html: `${response.data.message}`,
          classes: "green lighten-1",
        });
      })
      .catch((err) => {
        M.toast({
          html: `${err}`,
          classes: "red lighten-1",
        });
      });
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get(`http://localhost:3333/2call/${this.props.match.params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.setState({ requeriments: response.data });
      })
      .catch((err) => {
        M.toast({
          html: `${err}`,
          classes: "red lighten-1",
        });
      });
  }

  render() {
    const requeriments = this.state.requeriments;

    return (
      <div className="row container ">
        <div className="col s12" id="form">
          <div className="container">
            <table className="highlight responsive-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Matrícula</th>
                  <th>Curso</th>
                  <th>Turno</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr key={requeriments.id}>
                  <th>{requeriments.id}</th>
                  <th>{requeriments.name}</th>
                  <th>{requeriments.registration}</th>
                  <th>{requeriments.course}</th>
                  <th>Noite</th>
                  <th>{requeriments.comments}</th>
                </tr>
              </tbody>
            </table>
            <form
              action="/deferred"
              encType="multpart/form-data"
              method="post"
              onSubmit={this.handleSubmit}
            >
              <div className="col s12">
                <div className="col s12">
                  <textarea
                    className="text"
                    rows="100"
                    cols="100"
                    placeholder="Justificativa:"
                    type="text"
                    name="comments"
                    value={this.state.comments}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="container">
                  <div className="col s6">
                    <button
                      type="submit"
                      className="waves-effect green lighten-2 btn bt1 col s9"
                      onClick={this.handleDef}
                    >
                      Deferir
                    </button>
                  </div>
                </div>

                <div className="container">
                  <div className="col s6">
                    <button
                      type="submit"
                      className="waves-effect green lighten-2 btn bt2 col s9"
                      onClick={this.handleIndef}
                    >
                      Indeferir
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <a href="/coordlist" className="waves-effect red lighten-2 bt3 btn">
            Voltar
          </a>
        </div>
      </div>
    );
  }
}
export default Coordlist;
