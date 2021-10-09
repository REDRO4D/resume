import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import TitleSection from "../components/TitleSection";

const SignUp = () => {
    return (
        <Fragment>
            <Layout>
                <TitleSection>
                    <h2>Crear una cuenta</h2>
                    <p>Un paso antes de comentar</p>
                </TitleSection>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="title">
                            <h2>Hola</h2>
                            <p>¿Ya tienes una cuenta?
                                <Link to="/login"> Inicia sesi&oacute;n</Link>
                            </p>
                        </div>
                        <form action="" method="">
                            <div className="input-wrapper">
                                <label htmlFor="name">Nombre completo</label>
                                <input type="text" name="" id="name" placeholder="Miguel One" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="email">Correo</label>
                                <input type="email" name="" id="email" placeholder="portafolio@correo.com" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Contrase&ntilde;a</label>
                                <input type="password" name="" id="password" placeholder="*********" />
                            </div>
                            <button>Registrarse</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};

export default SignUp;