import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import Layout from "../components/Layout";
import TitleSection from "../components/TitleSection";

import { signUpWithEmail } from "../actions/auth";
import { UseUserDataContext } from './../context/userContext';

const SignUp = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorSignUp, setErrorSignUp] = useState(false);
    const { userActive } = UseUserDataContext();


    useEffect(() => {
        if (userActive) {
            props.history.push('/comment');
        }
    })



    const handleSubmit = (event) => {
        event.preventDefault();
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (pattern.test(email) && password.length > 5) {
            try {
                if (!signUpWithEmail(name, email, password)) {
                    setErrorSignUp(true);
                } else {
                    setErrorSignUp(false);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            setErrorSignUp(true);
        }

        try {
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Fragment>
            <Layout>
                <div className="content-wrapper">
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
                            {(errorSignUp) && <p className="title error-msg">Favor de completar todos los campos y verificar el correo electr&oacute;nico y la contrase&ntilde;a.</p>}
                            <form className="login-form" onSubmit={handleSubmit}>
                                <div className="input-wrapper">
                                    <label htmlFor="name">Nombre completo</label>
                                    <input type="text" name="" id="name" required placeholder="Miguel One" onChange={e => { setName(e.target.value) }} />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="email">Correo</label>
                                    <input type="email" name="" id="email" required placeholder="portafolio@correo.com" onChange={e => { setEmail(e.target.value) }} />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="password">Contrase&ntilde;a</label>
                                    <input type="password" name="" id="password" required placeholder="*********" onChange={e => { setPassword(e.target.value) }} />
                                </div>
                                <button className="button" type="submit">Registrarse</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment >
    );
};

export default withRouter(SignUp);