import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
export class Header extends Component {

   componentDidMount() {
      document.addEventListener("DOMContentLoaded", function () {

         var elems = document.querySelectorAll(".sidenav");
         var instances = M.Sidenav.init(elems);
         var elems = document.querySelectorAll(".dropdown-trigger");
         var instances = M.Dropdown.init(elems);
      });
   }

   render() {
      return (
         <div>
            <nav className="light-green darken-4" role="navigation">
               <div className="nav-wrapper container">

                  <a id="logo-container" href=" " className="brand-logo">
                     IFPE
             </a>

                  <a href="aa.html" data-target="nav-mobile" className="sidenav-trigger">
                     <i className="material-icons">menu</i>
                  </a>

                  <ul className="right hide-on-med-and-down">

                     <a className="dropdown-trigger btn light-green darken-4 " href=" " data-target="dropdown1">
                        <i className="material-icons">menu</i>
                     </a>

                     <ul id="dropdown1" class="dropdown-content">

                        <li>
                           <a href="aa.html">Ajuda</a>
                        </li>
                     </ul>
                  </ul>

                  <ul id="nav-mobile" className="sidenav">
                     <li>
                        <a href="aa.html">Ajuda</a>
                     </li>
                  </ul>
               </div>
            </nav>

         </div>
      )
   }
}

export default Header;