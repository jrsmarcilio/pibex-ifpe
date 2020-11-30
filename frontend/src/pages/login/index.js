import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";

import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registration: "",
      password: "",
      hasError: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let change = [];
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3333/sessions", this.state, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        window.location = response.data.user.redirect;
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        this.setState({ hasError: error.response.data.error });
      });
  }
  render() {
    if (this.state.hasError) {
      M.toast({
        html: `${this.state.hasError}`,
        classes: "red lighten-1",
      });
      this.setState({ hasError: "" });
    }
    return (
      <div>
        <div className="row container">
          <div className="col s12 " id="Login">
            <form action="/sessions" method="post" onSubmit={this.handleSubmit}>
              <p className="flow-text black-text text-darken-4 center">
                Faça login com a sua matricula/siape!
              </p>
              <div className="input-field col s6">
                <i className="material-icons prefix">perm_identity</i>
                <input
                  name="registration"
                  onChange={this.handleChange}
                  value={this.state.registration}
                  id="input_text"
                  type="text"
                  className="validate"
                  minLength="8"
                  required
                />
                <label htmlFor="input_text">Matricula/Siape</label>
                <span className="helper-text">Insira sua Matricula/Siape</span>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">lock_outline</i>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.password}
                  minLength="6"
                  required
                />
                <label htmlFor="password">Senha</label>
              </div>

              <div className="col s12 center">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Lembrar Senha</span>
                  </label>
                </p>
              </div>

              <div className="container">
                <div className="col s6">
                  <button
                    type="submit"
                    className="btn waves-effect green lighten-2 col s12"
                  >
                    Login
                  </button>
                </div>
              </div>

              <div className="container">
                <div className="col s6">
                  <a
                    href="/register"
                    className="btn waves-effect green lighten-4 black-text col s12 "
                  >
                    {" "}
                    Primeiro acesso!
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
