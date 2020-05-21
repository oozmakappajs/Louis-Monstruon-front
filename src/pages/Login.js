import React from 'react';

import logo from '../assets/images/logo_2.png';
import '../assets/styles/pages/login.scss';

const Login = (props) => {
  return (
    <div className="modalView">
      <header className="modalView_header">
        <h2>Only button back</h2>
      </header>
      <main className="modalView_content">
        <section className="login">
          <img src={logo} alt="Logo" className="auth_logo" />
          <form>
            <input type="text" placeholder="Correo" />
            <input type="text" placeholder="Contraseña" />
            <button type="submit">Iniciar sesion</button>
          </form>
        </section>
        <section className="goToRegister">
          <button type="button">Registrate</button>
          <button type="button">Iniciar sesion con Google</button>
        </section>
      </main>
      <footer className="modalView_termsAndConditions">
        <h2>Terminos y condiciones</h2>
      </footer>
    </div>
  );
};

export default Login;
