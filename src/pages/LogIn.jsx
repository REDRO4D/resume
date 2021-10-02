import React, { Fragment } from "react";
import Layout from "../components/Layout";
import "./../styles/login.scss";

const LogIn = () => {
  return (
    <Fragment>
      <Layout>
        <div className="content">
          <div className="card">
            <div className="title">
              <h2>Inicia sesi&oacute;n para continuar</h2>
              <p>¿Eres nuevo? <a href="/signup">Crea un cuenta</a> </p>
            </div>
            <form action="" method="">
              <div className="input-wrapper">
                <label htmlFor="email">Correo</label>
                <input type="email" name="" id="email" placeholder="portafolio@correo.com" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="" id="password" placeholder="*********" />
              </div>
              <button>Iniciar sesi&oacute;n</button>
            </form>
            <div className="separator">
              <p>O</p>
            </div>
            <div className="login-with">
              <button href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="511.999" viewBox="0 0 512 511.999">
                  <path id="Unión_1" data-name="Unión 1" d="M-355.589-1132.119A253.348,253.348,0,0,1-390-1260a253.348,253.348,0,0,1,34.411-127.881A255.656,255.656,0,0,1-134-1516a255.232,255.232,0,0,1,167.622,62.812,16.822,16.822,0,0,1,.963,24.6l-47.27,47.271a16.632,16.632,0,0,1-22.383,1.008A155.109,155.109,0,0,0-134-1415.826c-57.554,0-107.8,31.446-134.783,77.979A154.669,154.669,0,0,0-289.826-1260a154.669,154.669,0,0,0,21.043,77.847c26.986,46.533,77.229,77.979,134.783,77.979a154.66,154.66,0,0,0,77.853-21.047h0a157,157,0,0,0,67.58-79.194H-106.173a16.7,16.7,0,0,1-16.7-16.7v-66.715a16.7,16.7,0,0,1,16.7-16.7l208.841.01a16.772,16.772,0,0,1,16.455,13.785A169.226,169.226,0,0,1,122-1257.941c0,91.378-47.559,173.007-128,219.53v.119A255.567,255.567,0,0,1-134-1004,255.656,255.656,0,0,1-355.589-1132.119Z" transform="translate(390 1516)" />
                </svg>
                <p>Iniciar con Google</p>
                <span></span>
              </button>
              <button href="#">
                <svg
                  id="Bold"
                  enable-background="new 0 0 24 24"
                  height="512"
                  viewBox="0 0 24 24"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
                </svg>
                <p>Iniciar con Facebook</p>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default LogIn;
