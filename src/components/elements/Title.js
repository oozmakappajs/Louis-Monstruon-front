import React from 'react';
import '../../assets/styles/components/elements/Title.scss';

const Title = (props) => {
  return (
    <div className="Title">
      <h1>
        {props.children}
        {props.choose && 'Elige tu metodo de pago'}
        {props.information && 'Escoge la direccion de envio'}
        {props.redirect && 'Redireccion a Stripe o PayPal'}
        {props.finish && 'Fin de la transacción'}
      </h1>
    </div>
  );
};

export default Title;
