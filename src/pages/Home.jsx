import React, { Fragment, useEffect } from "react";
import Layout from "./../components/Layout";
import './../styles/home.scss';

const Home = () => {
  const animation = () => {
    const hero = ['¡Hola!', 'Soy Bruno Rosales', 'Desarrollador de Software'];
    var greetingDiv = document.querySelector('#greeting');
    var nameDiv = document.querySelector('#me');
    var careerDiv = document.querySelector('#carrer');

    let i = 0;
    let flag = 0;

    const cursor = document.createElement('i');
    cursor.className = 'cursor';

    const writeAnimation = setInterval(() => {
      try {
        switch (flag) {
          case 0:
            greetingDiv.innerHTML = hero[0].slice(0, i);
            if (i === 0) {
              document.getElementsByClassName('text-wrapper')[0].appendChild(cursor);
            }
            if (i < hero[0].length) {
              i++;
            } else {
              document.querySelector('.cursor').remove();
              i = 0;
              flag = 1;
            }
            break;
          case 1:
            nameDiv.innerHTML = hero[1].slice(0, i);
            if (i === 0) {
              document.getElementsByClassName('text-wrapper')[1].appendChild(cursor);
            }
            if (i < hero[1].length) {
              i++;
            } else {
              document.querySelector('.cursor').remove();
              i = 0;
              flag = 2;
            }
            break;
          case 2:
            careerDiv.innerHTML = hero[2].slice(0, i);
            if (i === 0) {
              document.getElementsByClassName('text-wrapper')[2].appendChild(cursor);
            }
            if (i < hero[2].length) {
              i++;
            } else {
              document.querySelector('.cursor').classList.add('typed');
              i = 0;
              flag = 3;
            }
            break;

          default:
            clearInterval(writeAnimation);
            break;
        }
      } catch (error) {
        clearInterval(writeAnimation);
      }
    }, 100);
  };
  useEffect(() => {
    animation();
  }, []);

  return (
    <Fragment>
      <Layout>
        <div className="content-wrapper content-wrapper-hero">
          <section className="hero">
            <div className="message">
              <div className="text-wrapper">
                <p id="greeting"></p>
              </div>
              <div className="text-wrapper">
                <h1 id="me"></h1>
              </div>
              <div className="text-wrapper">
                <p id="carrer"></p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Home;
