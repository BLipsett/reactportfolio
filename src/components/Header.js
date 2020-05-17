import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>

        <Link to="/About">About</Link>
        <Link to="/Home"> Home </Link>
        <Link to="/Portfolio">Portfolio</Link>


        </div>



    //     <div class="container">
    //     <nav class="topNav">
    //         <div class="nav-wrapper">
    //             <a href="#!" class="brand-logo"></a>
    //             <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    //             <a class="bLip" href="index.html">
    //                 <div class="logo-image">
    //                     <img src="Group2.svg" class="img-fluid">
    //                 </div>
    //             </a>

    //             <ul id="nav-mobile" class="right hide-on-med-and-down">
    //                 <li><a href="./projects.html">Projects</a></li>
    //                 <li><a href="./passions.html">Passions</a></li>
    //                 <li><a href="./contact.html">Contact</a></li>
    //             </ul>
    //         </div>
    //     </nav>
    //     <ul class="sidenav" id="mobile-demo">
    //         <li><a href="projects.html">Projects</a></li>
    //         <li><a href="passions.html">Passions</a></li>
    //         <li><a href="contact.html">Contact</a></li>

    // </div>
    )
};

export default Header;