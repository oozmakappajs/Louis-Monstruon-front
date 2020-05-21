import React from 'react';

import logo from '../assets/images/logo_2.png';
import '../assets/styles/pages/register.scss';

const Register = (props) => {
  return (
    <div className="modalView">
      <header className="modalView_header">
        <h2>Only button back</h2>
      </header>
      <main className="modalView_content">
        <section className="register">
          <img src={logo} alt="Logo" className="auth_logo" />
          <form>
            <input type="text" placeholder="Correo" />
            <input type="text" placeholder="Contraseña" />
            <button type="submit">Iniciar sesion</button>
          </form>
        </section>
        <section className="nextStep">
          <button type="button">Siguiente</button>
          <button type="button">Registrate con Google</button>
        </section>
      </main>
      <footer className="modalView_termsAndConditions">
        <h2>Terminos y condiciones</h2>
      </footer>
    </div>
  );
};

export default Register;
