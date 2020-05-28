import React from 'react';
import { CheckCircleOutline } from '@material-ui/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/elements/Title';
import Subtitle from '../components/elements/Subtitle';
import PageSlider from '../components/PageSlider';
import Button from '../components/elements/Button';
import UserDetails from '../components/UserDetails';
import '../assets/styles/pages/payment.scss';

const Payment = (props) => {
  return (
    <div className="modalView">
      <Header type="back" />
      <main className="modalView_content paymentSteps">

        <section className="paymentSteps_header">
          <Title className="paymentSteps_header-title">Proceso de Pago</Title>
          <PageSlider />
          <Subtitle choose className="paymentSteps_header-text" />
        </section>

        <section className="paymentSteps_content">
          {
            props.choose && (
              <>
                <Button name="blue" buttonType="button">PayPal</Button>
                <Button name="gradient" buttonType="button">Stripe</Button>
              </>
            )
          }
          {
            props.info && (
              <>
                <UserDetails full />
                <UserDetails />
              </>
            )
          }
          {
            props.redirect && (
              <div className="paymentSteps_content-text">
                <p>LLenado de información para pagar</p>
              </div>
            )
          }
          {
            props.finish && (
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
          props.choose && props.info ?
            <div className="paymentSteps__separator" /> : ''
        }
        <section className="paymentSteps_actions">
          {
            props.choose && (
              <>
                <Button name="error" buttonType="button">Cancelar</Button>
              </>
            )
          }
          {
            props.info && (
              <>
                <Button name="success" buttonType="button">Siguiente</Button>
                <Button name="error" buttonType="button">Cancelar</Button>
              </>
            )
          }
          {
            props.finish && (
              <Button name="success" buttonType="button">Ver más productos</Button>
            )
          }
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Payment;
