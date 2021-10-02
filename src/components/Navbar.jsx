import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './../styles/navbar.scss';

const Navbar = () => {
    return (
        <Fragment>
            <nav>
                <Link to="/">
                    Bruno Rosales
                </Link>
                <ul>
                    <li>
                        <a href="#">Acerca</a>
                    </li>
                    <li>
                        <a href="#">Habilidades</a>
                    </li>
                    <li>
                        <a href="#">Portafolio</a>
                    </li>
                    <li>
                        <a href="#">Cont&aacute;ctame</a>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar;