import React, {Component} from 'react';
import M from 'materialize-css'
import 'materialize-css/dist/js/materialize'
import './style.css'




export class Teste extends Component {

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
    </nav>
            <br></br>

            <div className= 'container row'>

                <div className="input-field col s12 m6">

            <select>
            <option value="" disabled selected>Selecione o seu curso</option>
            <option value="1"> Informatica para internet</option>
            <option value="2"> Qualidade</option>
            <option value="3">Analise e desenvolvimento de sistemas</option>
            </select>
            <label>Esolha seu Curso</label>

        </div>
            
        <div className="input-field col s12 m6">
           
            <input id="input_text" type="text" maxlength="13"/>
            <label for="input_text">Insira sua matricula:</label>

        </div>

        <div className="input-field col s12 m6">

            <select>
                <option value="" disabled selected>Selecione o tipo de requisição</option>
                <option value="1"> Segunda chamada</option>           
            </select>

            </div>

        <div className="input-field col s12 m6">
            <label for="datepicker">Data do dia perdido:</label>
            <input type="text" class="datepicker"/>

        </div>
            <div className="textarea col s12 m6">
            <textarea name="textarea" rows="1000" cols="1000" placeholder="Observações:"></textarea>
                </div>
            
            
             <div className="textarea col s12 m6">

                <form action="#">
                <div class="file-field input-field">
                <div class="btn green lighten-2 ">
                    <span>File</span>
                    <input type="file" multiple/>
                </div>

                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" placeholder="Anexe seus arquivos aqui"/>
                </div>

                </div>
                </form>
                </div> 

               
    
        
                </div>
                <div className="input-field col s12 m6 l3 center">
                            <a href="a" class="btn waves-effect green lighten-2 col s12">Enviar Requerimento</a>
                        </div>
                
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

