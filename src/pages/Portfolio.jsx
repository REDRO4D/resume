import React, { Fragment } from "react";
import Layout from './../components/Layout';
import TitleSection from '../components/TitleSection';
import pcDesign from './../assets/PC-Design.png';
import './../styles/portfolio.scss';
const Portfolio = () => {
    return (
        <Fragment>
            <Layout>
                <div className="content-wrapper">
                    <TitleSection>
                        <h2>Portafolio</h2>
                        <p>Mis trabajos</p>
                    </TitleSection>
                    <div className="projects">
                        <div className="project">
                            <div className="info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem, recusandae velit officiis
                                    perspiciatis.</p>
                                <a href="https://bruno-rosales-practica.000webhostapp.com/" target="_blank">Ver proyecto</a>
                            </div>
                            <figure>
                                < img src={pcDesign} alt="" />
                            </figure>
                        </div>
                        <div className="project">
                            <div className="info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem, recusandae velit officiis
                                    perspiciatis.</p>
                                <a href="#">Ver proyecto</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem, recusandae velit officiis
                                    perspiciatis.</p>
                                <a href="#">Ver proyecto</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem, recusandae velit officiis
                                    perspiciatis.</p>
                                <a href="#">Ver proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};

export default Portfolio;