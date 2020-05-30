import React from 'react';
import '../../assets/styles/components/elements/Subtitle.scss';

const Subtitle = (props) => {
  return (
    <div className="Subtitle">
      <p>
        {props.step === 0 && 'Escoge el metodo de pago'}
        {props.step === 1 && 'Escoge la direccion de envio'}
        {props.step === 2 && 'Redireccion a Stripe o PayPal'}
        {props.step === 3 && 'Fin de la transacción'}
      </p>
    </div>
  );
};

export default Subtitle;
