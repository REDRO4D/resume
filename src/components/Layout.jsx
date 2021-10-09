import React, { Fragment } from "react";
import Navbar from './Navbar';
//import Footer from './Footer';

const Layout = (props) => {
    return (
        <Fragment>
            <Navbar />
            <div id="content-wrapper">
                {props.children}
            </div>
        </Fragment>
    )
}

export default Layout;