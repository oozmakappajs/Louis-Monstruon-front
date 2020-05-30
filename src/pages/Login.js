import React, { useState } from 'react';
import { getGlobalState } from '../Context';

import InputComponent from '../components/elements/InputComponent';
import Button from '../components/elements/Button';
import Logo from '../components/elements/Logo';
import '../assets/styles/pages/login.scss';

const Login = (props) => {
  const [{ isAuth, settings: { theme } }, dispatch] = getGlobalState();
  const [form, setForm] = useState({});

  const goTo = (url) => {
    props.history.push(url);
  };

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
    props.history.push('/');
  };

  if (isAuth) {
    return (
      <main className={`modalView_content ${theme} login__modal`}>
        <section className="login login_auth">
          <Logo />
          <h1>Ya has iniciado sesión no es necesarion que lo hagas de nuevo</h1>
          <Button name="base-blue" buttonType="button" action={() => { goTo('/'); }}>Ver productos</Button>
          <Button name="base-purple" buttonType="button" action={() => { goTo('/profile/tuentyfaiv'); }}>Ir a mi perfil</Button>
        </section>
      </main>
    );
  }

  return (
    <main className={`modalView_content ${theme} login__modal`}>
      <section className="login">
        <Logo />
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-inputs">
            <InputComponent type="email" title="Email" name="email" action={handleInput} required={true} />
            <InputComponent type="password" title="Contraseña" name="password" action={handleInput} required={true} />
          </div>
          <Button name="base-blue" buttonType="submit">Iniciar sesion</Button>
        </form>
      </section>
      <section className="goToRegister">
        <div className="login__separator" />
        <Button name="base-purple" buttonType="button" action={() => { goTo('/register'); }}>Registrate</Button>
        <Button name="image" buttonType="button">Registrate con </Button>
      </section>
    </main>
  );
};

export default Login;
