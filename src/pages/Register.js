import React from 'react';
import { getGlobalState } from '../Context';

import SEO from '../components/elements/SEO';
import InputComponent from '../components/elements/InputComponent';
import Button from '../components/elements/Button';
import Logo from '../components/elements/Logo';

import '../assets/styles/pages/register.scss';

const Register = (props) => {
  const [{ isAuth, settings: { theme } }] = getGlobalState();

  const goTo = (url) => {
    props.history.push(url);
  };

  if (isAuth) {
    return (
      <>
        <SEO
          title="Register | Louis Monstruon"
          description="Description Register"
          kw="Stripe, Clothes, Store"
        />
        <main className={`modalView_content ${theme} register__modal`}>
          <section className="register register_auth">
            <Logo />
            <h1>Ya has iniciado sesión no es necesarion que te registres</h1>
            <Button name="base-blue" buttonType="button" action={() => { goTo('/'); }}>Ver productos</Button>
            <Button name="base-purple" buttonType="button" action={() => { goTo('/profile/tuentyfaiv'); }}>Ir a mi perfil</Button>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Register | Louis Monstruon"
        description="Description Register"
        kw="Stripe, Clothes, Store"
      />
      <main className={`modalView_content ${theme} register__modal`}>
        <section className="register">
          <Logo />
          <form className="register__form">
            <div className="register__form-inputs">
              <InputComponent type="text" title="Nombre" name="name" />
              <InputComponent type="email" title="Email" name="email" />
              <InputComponent type="date" title="Fecha de nacimiento" name="birthday" />
            </div>
          </form>
        </section>
        <section className="nextStep">
          <Button name="success" buttonType="button">Siguiente</Button>
          <div className="register__separator" />
          <Button name="image" buttonType="button">Registrate con </Button>
        </section>
      </main>
    </>
  );
};

export default Register;
