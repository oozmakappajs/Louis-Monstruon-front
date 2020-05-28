import React from 'react';
import '../../assets/styles/components/elements/Subtitle.scss';

const Subtitle = (props) => {
  return (
    <div className="Subtitle">
      <p>
        { props.choose && 'Proceso de Pago'}
        { props.information && 'Escoge la direccion de envio'}
        { props.redirect && 'Redireccion a Stripe o PayPal'}
        { props.finish && 'Fin de la transacción'}
      </p>
    </div>
  );
};

export default Subtitle;
