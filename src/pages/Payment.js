import React from 'react';
import { getGlobalState } from '../Context';

import Button from '../components/elements/Button';

import '../assets/styles/pages/payment.scss';

const Payment = (props) => {
  const [{ isAuth }] = getGlobalState();

  const goTo = (url) => {
    props.history.push(url);
  };

  if (!isAuth) {
    return (
      <main className="modalView_content paymentSteps">
        <section className="paymentSteps_actions">
          <h1>
            <Button name="success" action={() => { goTo('/login'); }}>Iniciar sesión</Button>
          </h1>
          <p>
            ¿No tienes una cuenta?
            <Button name="purpleBase" action={() => { goTo('/register'); }}>Registrate</Button>
          </p>
        </section>
        <section className="paymentSteps_actions">
          <button type="button">Continuar como invitado</button>
        </section>
      </main>
    );
  }

  return (
    <main className="modalView_content paymentSteps">
      <section className="paymentSteps_header">
        <h1>Payment process</h1>
        <div>
          <p>step position</p>
        </div>
        <h3>process title</h3>
      </section>
      <section className="paymentSteps_content">
        <button type="button">Payment Method</button>
        <button type="button">Payment Method</button>
      </section>
      <section className="paymentSteps_actions">
        <button type="button">Siguiente</button>
        <button type="button">Cancelar</button>
      </section>
    </main>
  );
};

export default Payment;
