import React from 'react';
import ReactDOM from 'react-dom';
import swal from 'sweetalert';
import paypal from 'paypal-checkout';

const PayplaCheckoutButton = ({ order }) => {
  const paypalConf = {
    currency: 'MXN',
    env: 'production',
    client: {
      production: 'AQdBh3hj3OgiahwN9ipkAS-YG9DB0lj6ychrPrSnPfds4CnpUfqcuwBmIya8DeBA_slUyZIOL56C5Qi6',
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
          description: 'Buy in Louis Monstruon',
          custom: order.customer || '',
          item_list: {
            items: order.items,
          },
        },
      ],
      note_to_payer: 'contact us for questions',
    };
    return actions.payment.create({ payment });
  };
  const onAuthorize = (data, actions) => {
    return actions.payment.execute()
      .then((response) => {
        console.log(response);
        swal(`Cool!Your payment was processed CORRECTLY with the ID ${response.id}`);
      })
      .catch((error) => {
        console.log(error);
        swal('3312, WE HAVE A 3312, There is an error with the payment process :(');
      });
  };
  const onError = (error) => {
    console.log(error);
    swal('Payment failed :(');
  };

  const onCancel = (data, actions) => {
    swal('Process was canceled');
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
