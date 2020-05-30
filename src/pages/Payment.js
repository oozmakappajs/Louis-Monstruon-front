import React, { useState } from 'react';
import { CheckCircleOutline } from '@material-ui/icons';
import { getGlobalState } from '../Context';

import Title from '../components/elements/Title';
import Subtitle from '../components/elements/Subtitle';
import PageSlider from '../components/PageSlider';
import Button from '../components/elements/Button';
import UserDetails from '../components/UserDetails';

import '../assets/styles/pages/payment.scss';

const Payment = (props) => {
  const [{ settings: { theme } }] = getGlobalState();
  const [step, setStep] = useState(0);

  const handleStep = () => {
    setStep(step + 1);
  };

  return (
    <main className="modalView_content paymentSteps">

      <section className={`paymentSteps_header ${theme}`}>
        <Title className="paymentSteps_header-title">Proceso de Pago</Title>
        <PageSlider />
        <Subtitle step={step} className="paymentSteps_header-text" />
      </section>

      <section className={`paymentSteps_content ${theme}`}>
        {
          step === 0 && (
            <>
              <Button name="blue" buttonType="button" action={handleStep}>PayPal</Button>
              <Button name="gradient" buttonType="button" action={handleStep}>Stripe</Button>
            </>
          )
        }
        {
          step === 1 && (
            <>
              <UserDetails full />
              <UserDetails full />
              <UserDetails full />
              <UserDetails full />
              <UserDetails />
            </>
          )
        }
        {
          step === 2 && (
            <div className="paymentSteps_content-text">
              <p>LLenado de información para pagar</p>
            </div>
          )
        }
        {
          step === 3 && (
            <>
              <div className="paymentSteps_content-icon">
                <CheckCircleOutline />
              </div>
              <p className="paymentSteps_content-text--success">¡Compra Exitosa!</p>
            </>
          )
        }
      </section>
      {
        step === 0 && step === 1 ?
          <div className="paymentSteps__separator" /> : ''
      }
      <section className="paymentSteps_actions">
        {
          step === 0 && (
            <>
              <Button name="error" buttonType="button">Cancelar</Button>
            </>
          )
        }
        {
          step === 1 && (
            <>
              <Button name="success" buttonType="button" action={handleStep}>Siguiente</Button>
              <Button name="error" buttonType="button">Cancelar</Button>
            </>
          )
        }
        {
          step === 3 && (
            <Button name="success" buttonType="button">Ver más productos</Button>
          )
        }
      </section>

    </main>
  );
};

export default Payment;
