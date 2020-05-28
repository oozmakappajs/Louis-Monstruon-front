import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/register.scss';
import InputComponent from '../components/elements/InputComponent';
import Button from '../components/elements/Button';
import Logo from '../components/elements/Logo';

const Register = () => {
  return (
    <div className="modalView">
      <Header type="back" />
      <main className="modalView_content register__modal">
        <section className="register">
          <Logo />
          <form className="register__form">
            <div className="register__form-inputs">
              <InputComponent title="Nombre" />
              <InputComponent title="Email" />
              <InputComponent title="Confirma tu contraseña" />
            </div>
            <Button name="blueBase" buttonType="submit">Iniciar sesion</Button>
          </form>
        </section>
        <div className="register__separator" />
        <section className="nextStep">
          <Button name="purpleBase" buttonType="button">Siguiente</Button>
          <Button name="google" buttonType="button">Registrate con </Button>
        </section>
      </main>
      <Footer>terms and Conditions</Footer>
    </div>
  );
};

export default Register;

