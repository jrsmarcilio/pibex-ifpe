import React, { Component } from "react";
import "materialize-css/dist/js/materialize";

export class Footer extends Component {

   render() {
      return (
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
                              href="https://www.facebook.com/ifpejaboatao/" className="black-text">Facebook</a>
                        </li>
                        <li>
                           <a
                              href="https://www.instagram.com/ifpejaboatao/" className="black-text">Instagram</a>
                        </li>
                        <li>
                           <a href="https://br.linkedin.com/school/ifpe-jaboatao/" className="black-text">Linked In</a>
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

      )
   }
}


export default Footer;