import React, { Fragment } from "react";
import './../styles/skills.scss';

import Layout from '../components/Layout';
import TitleSection from "../components/TitleSection";

const Skills = () => {
    return (
        <Fragment>
            <Layout>
                <TitleSection>
                    <h2>Habilidades</h2>
                    <p>Conocimientos</p>
                </TitleSection>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>B&aacute;sico</th>
                            <th>Intermedio</th>
                            <th>Semi avanzado</th>
                            <th>Avanzado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Java</td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td></td>
                        </tr>
                        <tr>

                            <td>C</td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>PHP</td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>HTML 5</td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>CSS 3</td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>MySQL</td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>Ingl&eacute;s</td>
                            <td className="process"></td>
                            <td className="process"></td>
                            <td></td>
                            <td></td>

                        </tr>
                    </tbody>
                </table>
            </Layout>
        </Fragment>
    );
};

export default Skills;