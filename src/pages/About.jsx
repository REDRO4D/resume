import React, { Fragment } from "react";
import Layout from "../components/Layout";
import TitleSection from "../components/TitleSection";
import './../styles/about-me.scss';

const AboutMe = () => {
    return (
        <Fragment>
            <Layout>
                <div className="content-wrapper">
                    <TitleSection>
                        <h2>Sobre mi</h2>
                        <p>About me</p>
                    </TitleSection>
                    <div className="info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus quisquam tempora aspernatur
                            amet quo quis sed totam facere iure, suscipit ab debitis explicabo ut quaerat nobis esse. Amet, sit.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore placeat nisi dolor earum ipsa,
                            nesciunt corporis quae aspernatur, asperiores beatae corrupti repudiandae officiis rerum pariatur,
                            quisquam est tempore dignissimos sed.</p>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};

export default AboutMe;