import React, {Component, useState } from 'react';

import M from 'materialize-css'
import 'materialize-css/dist/js/materialize'
import './style.css'

//export
class Teste extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      matricula: '',
      curso: '',
      dia_ausente: '',
      observacoes: '',
      docAnexo: ''    
    };
  };
  handleMatriculaChange = (event) => {
    this.setState({
      matricula: event.target.value
    })
  }
  
  handleCursoChange = (event) => {
    this.setState({
      curso: event.target.value
    })
  }
  
  handleDateChange = (event) => {
    this.setState({
      dia_ausente: event.target.value
    })
  }

  handleObservacoesChange = (event) => {
    this.setState({
      observacoes: event.target.value
    })
  }

  handleDocAnexoChange = (event) => { 
    let docsAnexo = event.target.docAnexo;

    let reader = new FileReader();
    reader.readAsDataURL(File[0]);

    reader.onload = (event) => {
      console.warn('Img data', event.target.result)
    }
  }
    
  handleSubmit = event => {
    alert(`${this.state.matricula} ${this.state.curso} ${this.state.date} ${this.state.observacoes} ${this.state.docAnexo}`);
    event.preventDefault();
  }

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems,);
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, );
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, );
      });
    }
  
  render() {
    const { matricula, curso, dia_ausente, observacoes, docAnexo } = this.state;
      return (
        <div>
          <nav class="light-green darken-4" role="navigation">
            <div class="nav-wrapper container"><a id="logo-container" href=" " class="brand-logo">IFPE</a>
              <a href="aa.html" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li><a href="https://portal.ifpe.edu.br/campus/jaboatao">Site Oficial</a></li>
                <li><a href="aa.html">Ajuda</a></li>
              </ul>
              <ul id="nav-mobile" class="sidenav">
                <li><a href="https://portal.ifpe.edu.br/campus/jaboatao">Site Oficial</a></li>
                <li><a href="aa.html">Ajuda</a></li>
              </ul>
            </div>
            </nav><br></br>
              <form onSubmit={this.handleSubmit}>
                <div className= 'container row'>
                  <div className="input-field col s12 m6">
                    <label>Selecione o seu curso</label>
                      <select value={this.state.curso} onChange={this.handleCursoChange}>
                        <option value="Informática"> Informatica para Internet</option>
                        <option value="Qualidade"> Qualidade</option>
                        <option value="ADS">Analise e Desenvolvimento de Sistemas</option>
                    </select>
                  </div>
                  <div className="input-field col s12 m6">
                    <input
                      id="input_text"
                      type="text"
                      maxlength="13"
                      value={this.state.matricula}
                      onChange={this.handleMatriculaChange}
                    />
                    <label for="input_text">Insira sua matricula</label>
                  </div>
                  <div className="input-field col s12 m6">
                    <select>
                        <label>Selecione o tipo de requisição</label>
                        <option value="1">Segunda chamada</option>           
                    </select>
                  </div>
                  <div className="input-field col s12 m6">
                    <label for="datepicker">Data do dia perdido</label>
                    <input
                      type="text"
                      class="datepicker"
                      value={this.state.date}
                      onChange={this.handleDateChange}
                      />
                  </div>
                  <div className="textarea col s12 m6">
                    <textarea
                      name="textarea"
                      rows="1000"
                      cols="1000"
                      placeholder="Observações:"
                      value={this.state.observacoes}
                      onChange={this.handleObservacoesChange}
                    />
                    </div>
                      <div className="textarea col s12 m6">
                        <div class="file-field input-field">
                          <div class="btn green lighten-2 ">
                            <span>File</span>
                            <input type="file" multiple/>
                          </div>
                          <div className="file-path-wrapper">
                            <input
                              className="file-path validate"
                              type="text"
                              placeholder="Anexe seus arquivos aqui"
                              value={this.state.docAnexo}       
                              onChange={this.handleDocAnexoChange}
                              />
                          </div>
                        </div>
                      </div> 
                </div>
                <div className="input-field col s12 m6 l3 center">
                  <button
                    type="submit"
                    href="a"
                    class="btn waves-effect green lighten-2 col s12"
                    value="Submit"
                    >Enviar Requerimento</button>
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
                          <li><a href="https://www.facebook.com/ifpejaboatao/" class="black-text">Facebook</a></li>
                          <li><a href="https://www.instagram.com/ifpejaboatao/" class="black-text">Instagram</a></li>
                          <li><a href="https://br.linkedin.com/school/ifpe-jaboatao/" class="black-text">Linked In</a></li>
                        </ul>
                      </div>
                    </div>  
                  </div>
                  <div className="footer-copyrwright grey darken-3">
                    <div className="container center-align">&copy; Todos os direitos reservados-2020 PIBEX</div>
                  </div>   
                </footer>
        </div>
      )
    }
}

  
export default Teste;

