import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './../styles/write-comment.scss';

import Layout from '../components/Layout';
import TitleSection from "../components/TitleSection";
import { UseUserDataContext } from "../context/userContext";

const WriteComment = (props) => {
    const { userData, userHasLogged } = UseUserDataContext();
    //const [comment, setComment] = useState(); onChange={e => { setComment(e.target.value) }}


    useEffect(() => {
        if (!userHasLogged) {
            props.history.push('/login');
        }
    })

    return (
        <Fragment>
            <Layout>
                <div className="content-wrapper write-comment">
                    <TitleSection>
                        <h2>Redactar un comentario</h2>
                        <p>¿C&oacute;mo fue trabajar conmigo?</p>
                    </TitleSection>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="title">
                                <p>¡Hola {userData.name}!</p>
                            </div>
                            <form className="login-form write-form" onSubmit={null}>
                                <div className="input-wrapper">
                                    <label htmlFor="name">Escribe tu comentario en el siguente campo:</label>
                                    <textarea name="" id="" cols="30" rows="6" placeholder="Lo que m&aacute;s me gust&oacute; de trabajar con el fue..." ></textarea>
                                </div>
                                <div className="buttons-wrapper">
                                    <Link className="button cancel-button" to="/comments">Cancelar</Link>
                                    <button className="button" type="submit">Comentar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};

export default WriteComment;