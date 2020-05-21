import React from 'react';

import '../assets/styles/pages/payment.scss';

const Payment = (props) => {
  return (
    <div className="modalView">
      <header className="modalView_header">
        <h2>Only button back</h2>
      </header>
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
      <footer className="modalView_termsAndConditions">
        <h2>Terminos y condiciones</h2>
      </footer>
    </div>
  );
};

export default Payment;
