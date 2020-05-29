import React from 'react';
import InputComponent from '../components/elements/InputComponent';
import Button from '../components/elements/Button';
import Logo from '../components/elements/Logo';
import '../assets/styles/pages/login.scss';

const Login = () => {
  return (
    <>
      <main className="modalView_content register__modal">
        <section className="login">
          <Logo />
          <form className="login__form">
            <div className="login__form-inputs">
              <InputComponent title="Email" />
              <InputComponent title="Contraseña" />
            </div>
            <Button name="blueBase" buttonType="submit">Iniciar sesion</Button>
          </form>
        </section>
        <section className="goToRegister">
          <div className="login__separator" />
          <Button url="/register" name="purpleBase" buttonType="button">Registrate</Button>
          <Button name="google" buttonType="button">Registrate con </Button>
        </section>
      </main>
    </>
  );
};

export default Login;
