import { Link } from "react-router-dom";
import React from 'react';

const Navbar=()=>{
    return(
   
    <nav id="navBar">
          <ul id="nav">
               <li className="nav-link"><Link to="./SiteInfo">Site info</Link></li>
               <li className="nav-link"><Link to="./About">About me</Link></li>
               <li className="nav-link"><Link to="./PastProjects">Past projects</Link></li>
               <li className="nav-link"><Link to="./Contact"> Contact information</Link></li>
          </ul>
     </nav>
    );
}
export default Navbar;