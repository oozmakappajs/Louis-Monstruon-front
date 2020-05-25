import React from 'react';
import '../../assets/styles/elements/Button.scss';

const Button = (props) => {
  return (
    <>
      {
        props.type === 'success' && (
          <button type="submit" className="Button Button--success">
            Aceptar
          </button>
        )
      }
      {
        props.type === 'error' && (
          <button type="submit" className="Button Button--error">
            Error
          </button>
        )
      }
      {
        props.type === 'blue' && (
          <button type="submit" className="Button Button--blue">
            Paypal
          </button>
        )
      }
      {
        props.type === 'gradient' && (
          <button type="submit" className="Button Button--gradient">
            Stripe
          </button>
        )
      }
    </>
  );
};

export default Button;
