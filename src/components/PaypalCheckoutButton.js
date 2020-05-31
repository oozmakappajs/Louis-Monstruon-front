import React from 'react';
import ReactDOM from 'react-dom';
import swal from 'sweetalert';
import paypal from 'paypal-checkout';

const PayplaCheckoutButton = ({ order }) => {
  const paypalConf = {
    currency: 'MXN',
    env: 'sandbox',
    client: {
      sandbox: 'AbIoq_r-mjiJO5SlvJdfYokwyu4J3ebPrEzQQbdpxGrgVOlBatrYeWbX5v4jqICvxTy6IPO9Iw5zCJXC',
      production: '-- id --',
    },
    style: {
      size: 'medium',
      color: 'gold',
      shape: 'pill',
      label: 'pay',
      tagline: 'true',
    },
  };
  const PaypalButton = paypal.Button.driver('react', { React, ReactDOM });

  const onPayment = (data, actions) => {
    const payment = {
      transactions: [
        {
          amount: {
            total: order.total,
            currency: paypalConf.currency,
          },
          description: 'Compra en Louis Monstruon',
          custom: order.customer || '',
          item_list: {
            items: order.items,
          },
        },
      ],
      note_to_payer: 'contactanos para para devoluciones',
    };
    return actions.payment.create({ payment });
  };
  const onAuthorize = (data, actions) => {
    return actions.payment.execute()
      .then((response) => {
        console.log(response);
        swal(`Cool! Tu pago se proceso CORRECTAMENTE, con el ID ${response.id}`);
      })
      .catch((error) => {
        console.log(error);
        swal('3312,TENEMOS UN 3312, Hay un error con proceso de pago :( ');
      });
  };
  const onError = (error) => {
    console.log(error);
    swal('No se pudo realizar el pago :(');
  };

  const onCancel = (data, actions) => {
    swal('Se cancelo proceso');
  };

  return (
    <PaypalButton
      env={paypalConf.env}
      client={paypalConf.client}
      payment={(data, actions) => onPayment(data, actions)}
      onAuthorize={(data, actions) => onAuthorize(data, actions)}
      onCancel={(data, actions) => onCancel(data, actions)}
      onError={(error) => onError(error)}
      style={paypalConf.style}
      commit
      locate="es_MX"
    />
  );
};

export default PayplaCheckoutButton;
