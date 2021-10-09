import React, { Fragment } from "react";
import './../../styles/about-me.scss'

const AboutMe = () => {
    return (
        <Fragment>
            <div className="content-wrapper">
                <div className="">
                    <h3>Sobre mi</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolor iure distinctio quisquam eligendi, itaque aperiam dignissimos corporis odio quia dicta suscipit magni recusandae quidem cumque ab at! Quisquam, quas.</p>
                </div>
                <div className="">
                    <h3>Estudios</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae architecto optio, quis reiciendis sequi eum repellat animi inventore cum beatae. Eos fugit quam culpa dolor maxime optio ipsum dignissimos officia</p>
                </div>
                <div>
                    <h3>Portafolio</h3>
                    <div className="proyects">
                        <div className="card">
                            <h4>Titulo</h4>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <p>Descripción</p>
                        </div>
                        <div className="card">
                            <h4>Titulo</h4>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <p>Descripción</p>
                        </div>
                        <div className="card">
                            <h4>Titulo</h4>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <p>Descripción</p>
                        </div>
                        <div className="card">
                            <h4>Titulo</h4>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <p>Descripción</p>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AboutMe;