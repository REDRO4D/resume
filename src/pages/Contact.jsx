import React, { Fragment } from "react";
import Layout from './../components/Layout';
import TitleSection from "../components/TitleSection";
import './../styles/contact.scss';

const Contact = () => {
    return (
        <Fragment>
            <Layout>
                <TitleSection>
                    <h2>Contacto</h2>
                    <p>¡Creemos algo juntos!</p>
                </TitleSection>
                <div className="section">
                    <form action="#" method="post">
                        <input type="text" placeholder="Nombre completo" required />
                        <input type="email" placeholder="Correo electr&oacute;nico" required />
                        <textarea name="" id="" cols="1" rows="2" placeholder="Mensaje" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </Layout>
        </Fragment>
    );
};

export default Contact;