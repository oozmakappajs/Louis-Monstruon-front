import React, { useState } from 'react';
import swal from 'sweetalert';
import { getGlobalState } from '../Context';

import SEO from '../components/elements/SEO';
import InputComponent from '../components/elements/InputComponent';
import Button from '../components/elements/Button';
import Logo from '../components/elements/Logo';

import '../assets/styles/pages/register.scss';

const Register = (props) => {
  const [{ isAuth, settings: { theme } }] = getGlobalState();
  const { location: { search } } = props;
  const [form, setForm] = useState({});

  let urlStep;
  let step;

  if (search !== '') {
    urlStep = search.split('=', 2);
    step = parseInt(urlStep[1], 10);
  } else {
    step = 1;
  }

  const goTo = (url) => {
    props.history.push(url);
  };

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleNextStep = (event) => {
    event.preventDefault();
    goTo('/register?step=2');
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      return swal('Your password does not match verification', 'Registration failed', 'error');
    }
    swal('Registration completed', 'Welcome to the platform', 'success');
    props.history.push('/login');
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
      {
        step === 1 && (
          <main className={`modalView_content ${theme} register__modal`}>
            <section className="register">
              <Logo />
              <form className="register__form" onSubmit={handleNextStep} id="formRegisterStep1">
                <div className="register__form-inputs">
                  <InputComponent type="text" title="Username" name="username" action={handleInput} required={true} />
                  <InputComponent type="text" title="Name" name="name" action={handleInput} required={true} />
                  <InputComponent type="date" title="Birthday" name="birthday" action={handleInput} required={true} />
                </div>
              </form>
            </section>
            <section className="nextStep">
              <Button name="success" buttonType="submit" form="formRegisterStep1">Next</Button>
              <div className="register__separator" />
              <Button name="image" buttonType="button">Register with </Button>
            </section>
          </main>
        )
      }
      {
        step === 2 && (
          <main className={`modalView_content ${theme} register__modal`}>
            <section className="register">
              <Logo />
              <form className="register__form" onSubmit={handleSubmit} id="formRegisterStep2">
                <div className="register__form-inputs">
                  <InputComponent type="email" title="Email" name="email" action={handleInput} required={true} />
                  <InputComponent type="password" title="Password" name="password" action={handleInput} required={true} />
                  <InputComponent type="password" title="Confirm password" name="confirmPassword" action={handleInput} required={true} />
                </div>
              </form>
            </section>
            <section className="nextStep">
              <Button name="success" buttonType="submit" form="formRegisterStep2">Finish</Button>
              <div className="register__separator" />
              <Button name="image" buttonType="button">Register with </Button>
            </section>
          </main>
        )
      }
    </>
  );
};

export default Register;
