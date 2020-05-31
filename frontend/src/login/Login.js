import React, { Component } from 'react'
import 'materialize-css/dist/js/materialize'
import M from 'materialize-css'
import './style.css'



  export class login extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems,);
            var el = document.querySelector('.tabs')
            var instance = M.Tabs.init(el);

            });

        }
          
    render() {
        return(
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
         

    <section class="container section" id="services" >

    <div className="row">

   <div className="col s12 l4">    
    <h3 class=" text-darken-4" id="texto">Bem vindo ao Novo! </h3>
      <p> Alguma coisa interessante escrita aqui!
          Alguma coisa interessante escrita aqui!
          Alguma coisa interessante escrita aqui!
          Alguma coisa interessante escrita aqui!
          Alguma coisa interessante escrita aqui!
          Alguma coisa interessante escrita aqui!
         
        </p>
   </div>
            

               <div className="col s12 l6 offset-l2">

                    <ul ref={Tabs => {this.Tabs = Tabs;}} className= "tabs">
                       <li class="tab col s6">
                           <a href="#Login" class="black-text text-darken-4">Login</a>
                       </li>
                       <li class="tab col s6">
                           <a href="#Registrar" class="black-text text-darken-4">Registrar</a>
                       </li>
                       </ul>
              

                   <div className="col s12" id="Login">
                       <p class="flow-text black-text text-darken-4">Login</p>
                        <div className="input-field">
                            <i class="material-icons prefix">mail_outline</i>
                            <input id="email" type="email" class="validate"/>
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Insira seu email</span>
                        </div>

                        <div className="input-field">            
                            <i class="material-icons prefix">lock_outline</i>
                            <input id="password" type="password" class="validate"/>
                            <label for="password">Password</label>
                        </div>

                        
                        <div className="col s12 center">      
                            <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Lembrar Senha</span>
                                </label>
                              </p>
                            </div>  
                          

                            <div className="input-field col s12">
                              <a href="a" class="btn waves-effect green lighten-2 col s12">Login</a>
                            </div>
                        
                   </div>         
                   
                            
        
                   
                  <div className="col s12" id="Registrar">

                    <p class="flow-text black-text text-darken-4">Registro</p>
                    
                    <div className="input-field">
                        <i class="material-icons prefix">assignment_ind</i>
                        <input id="last_name" type="text" class="validate"/>
                        <label for="last_name">Nome </label>
                        <span class="helper-text">Nome Completo</span>
                </div>  

                
                   <div className="input-field Id">
                           <i class="material-icons prefix">email</i>
                           <input id="email" type="email" class="validate"/>
                           <label for="email">Email</label>  
                           <span class="helper-text" data-error="wrong" data-success="right">Insira seu email</span>                   
                   </div>

                   <div className="input-field">
                            <i class="material-icons prefix">mail_outline</i>
                            <input id="email" type="email" class="validate"/>
                            <label for="email">Email</label>  
                            <span class="helper-text" data-error="wrong" data-success="right">Repita seu email</span>                   
                     </div>
            

                    <div className="input-field">
                        <i class="material-icons prefix">cake</i>
                        <input type="date" id="dia" name="dia"/>
                    </div>

                    <div className="input-field">
                        <i class="material-icons prefix">location_on</i>
                        <input id="last_name" type="text" class="validate"/>
                        <label for="last_name">Cidade</label>
                    </div>  

            <div className="row">
                <form class="col s12">
                    <div class="row">       
                        <div class="input-field col s6"> 
                           <i class="material-icons prefix">vpn_key</i>
                           <input id="password" type="password" class="validate"/>
                           <label for="password">Senha</label>
                        </div>

                         <div className="input-field col s6">            
                            <i class="material-icons prefix">vpn_key</i>
                            <input id="password" type="password" class="validate"/>
                            <label for="password">Repetir Senha</label>
                         </div>
                    </div>
                </form>
            </div>
                        
                        <div className="input-field col s12">
                            <a href="a" class="btn waves-effect green lighten-2 col s12">Enviar </a>
                        </div>
    
                         
                     
                  </div> 
            </div>       
    </div>

        </section>

                    <footer className="pagee-footer  grey darken">
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



export default login;