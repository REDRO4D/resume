import React, { Fragment } from "react";
import Layout from './../components/Layout';
import TitleSection from "../components/TitleSection";
import './../styles/comments.scss';
import { Link } from "react-router-dom";

const Comments = () => {
    return (
        <Fragment>
            <Layout>
                <TitleSection>
                    <h2>Comentarios</h2>
                    <p>¿C&oacute;mo ha sido trabajar conmigo?</p>
                </TitleSection>
                <section className="comments">
                    <blockquote className="comment">
                        <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, porro deleniti eos, nesciunt quae
                            at maiores libero modi autem iure magnam tempore in commodi facere dolores! Minus incidunt
                            reprehenderit possimus!</cite>
                        <footer>
                            <p>Autor desconocido</p>
                            <p className="date">08/10/2021</p>
                        </footer>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </blockquote>
                    <blockquote className="comment">
                        <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, porro deleniti eos, nesciunt quae
                            at maiores libero modi autem iure magnam tempore in commodi facere dolores! Minus incidunt
                            reprehenderit possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, est
                            odio, aperiam numquam sunt, placeat nemo tenetur animi sequi illum saepe enim atque nulla
                            expedita deleniti labore veniam eveniet aliquam!</cite>
                        <footer>
                            <p>Autor desconocido</p>
                            <p className="date">08/10/2021</p>
                        </footer>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </blockquote>
                    <blockquote className="comment">
                        <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, porro deleniti eos, nesciunt quae
                            at maiores libero modi autem iure magnam tempore in commodi facere dolores! Minus incidunt
                            reprehenderit possimus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quas
                            repellat fugiat qui incidunt porro nulla voluptatem quam iure corporis quo eius, aliquid
                            eligendi, quis fugit minima cum error odit. Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime odit quidem itaque in vitae deserunt excepturi ducimus! Cumque dolores, nam fuga
                            libero, aspernatur cum, maxime laborum expedita dolor sunt quidem!</cite>
                        <footer>
                            <p>Autor desconocido</p>
                            <p className="date">08/10/2021</p>
                        </footer>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </blockquote>
                    <blockquote className="comment">
                        <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, porro deleniti eos, nesciunt quae
                            at maiores libero modi autem iure magnam tempore in commodi facere dolores! Minus incidunt
                            reprehenderit possimus!</cite>
                        <footer>
                            <p>Autor desconocido</p>
                            <p className="date">08/10/2021</p>
                        </footer>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </blockquote>
                    <blockquote className="comment">
                        <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, porro deleniti eos, nesciunt quae
                            at maiores libero modi autem iure magnam tempore in commodi facere dolores! Minus incidunt
                            reprehenderit possimus!</cite>
                        <footer>
                            <p>Autor desconocido</p>
                            <p className="date">08/10/2021</p>
                        </footer>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </blockquote>
                    <blockquote className="comment">
                        <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, porro deleniti eos, nesciunt quae
                            at maiores libero modi autem iure magnam tempore in commodi facere dolores! Minus incidunt
                            reprehenderit possimus!</cite>
                        <footer>
                            <p>Autor desconocido</p>
                            <p className="date">08/10/2021</p>
                        </footer>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </blockquote>
                    <blockquote className="comment">
                        <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, porro deleniti eos, nesciunt quae
                            at maiores libero modi autem iure magnam tempore in commodi facere dolores! Minus incidunt
                            reprehenderit possimus!</cite>
                        <footer>
                            <p>Autor desconocido</p>
                            <p className="date">08/10/2021</p>
                        </footer>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </blockquote>
                </section>
                <div className="create-comment">
                    <p>¿Hemos trabajado juntos?</p>
                    <Link to="/login">Redacta un comentario</Link>
                </div>
            </Layout>
        </Fragment>
    );
};

export default Comments;