import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InputComponent from '../components/elements/InputComponent';
import Logo from '../components/elements/Logo';
import Button from '../components/elements/Button';
import '../assets/styles/pages/login.scss';

const Login = () => {
  return (
    <div className="modalView">
      <Header type="back" />
      <main className="modalView_content">
        <section className="login">
          <Logo />
          <form className="login__form">
            <div className="login__form-inputs">
              <InputComponent title="Usuario" />
              <InputComponent title="Nombre" />
              <InputComponent title="Fecha de nacimiento" />
            </div>
            <Button name="blueBase" buttonType="submit">Siguiente</Button>
          </form>
        </section>
        <div className="login__separator" />
        <section className="goToRegister">
          <Button name="google" buttonType="button">Registrate con </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
