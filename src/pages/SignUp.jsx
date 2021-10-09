import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const SignUp = () => {
    return (
        <Fragment>
            <Layout>
                <div className="content">
                    <div className="card">
                        <div className="title">
                            <h2>Inicia sesi&oacute;n para continuar</h2>
                            <p>¿Ya tienes cuenta? <Link to="/login">Iniciar sesi&oacute;n</Link> </p>
                        </div>
                        <form action="" method="">
                            <div className="input-wrapper">
                                <label htmlFor="name">Nombre completo</label>
                                <input type="text" name="" id="name" placeholder="Bruno Miguel Rosales Vargas" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="email">Correo</label>
                                <input type="email" name="" id="email" placeholder="portafolio@correo.com" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Contrase&ntilde;a</label>
                                <input type="password" name="" id="password" placeholder="*********" />
                            </div>
                            <button>Crear cuenta</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};

export default SignUp;