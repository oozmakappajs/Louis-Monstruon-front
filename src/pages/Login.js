import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { getGlobalState } from '../Context';

import logo from '../assets/images/logo_2.png';
import '../assets/styles/pages/login.scss';

const Login = (props) => {
  const [{ isAuth }, dispatch] = getGlobalState();
  const [form, setForm] = useState({});

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_AUTHORIZATION',
      payload: {
        token: 'token',
        user: form,
      },
    });
  };

  if (isAuth) {
    return <Redirect to="/profile/tuentyfaiv" />;
  }

  return (
    <div className="modalView">
      <header className="modalView_header">
        <h2>Only button back</h2>
      </header>
      <main className="modalView_content">
        <section className="login">
          <img src={logo} alt="Logo" className="auth_logo" />
          <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Correo" onChange={handleInput} required />
            <input type="text" name="password" placeholder="Contraseña" onChange={handleInput} required />
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
