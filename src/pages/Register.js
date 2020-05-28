import React from 'react';

import InputComponent from '../components/elements/InputComponent';
import Button from '../components/elements/Button';
import Logo from '../components/elements/Logo';

import '../assets/styles/pages/register.scss';

const Register = () => {
  return (
    <main className="modalView_content register__modal">
      <section className="register">
        <Logo />
        <form className="register__form">
          <div className="register__form-inputs">
            <InputComponent title="Nombre" />
            <InputComponent title="Email" />
            <InputComponent title="Confirma tu contraseña" />
          </div>
        </form>
      </section>
      <section className="nextStep">
        <Button name="success" buttonType="button">Siguiente</Button>
        <div className="register__separator" />
        <Button name="google" buttonType="button">Registrate con </Button>
      </section>
    </main>
  );
};

export default Register;

