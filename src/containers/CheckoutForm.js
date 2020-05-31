/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CARD_ELEMENT_OPTIONS from './CheckoutFormStyles';
import '../assets/styles/containers/CheckoutForm.scss';
import productImg from '../assets/images/products/dino2.jpg';
import stripeImg from '../assets/images/stripe.png';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const [product] = useState({
    name: 'Dino Jacket',
    price: 10.99,
  });

  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };
  async function stripeTokenHandler(token) {
    const response = await fetch('/charge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token.id }),
    });

    return response.json();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      setError(result.error.message);
    } else {
      setError(null);
      stripeTokenHandler(result.token);
    }
  };

  return (
    <section className="CheckoutForm__modal-container">
      <form onSubmit={handleSubmit} className="CheckoutForm">
        <div className="CheckoutForm__form">
          <div className="CheckoutForm__img--logo">
            <img src={stripeImg} alt="logo" />
          </div>
          <div className="CheckoutForm__product-info">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <div className="CheckoutForm__img">
              <img src={productImg} alt="product" />
            </div>
          </div>
          <label htmlFor="card-element">
            Credit or debit card
          </label>
          <CardElement
            id="card-element"
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleChange}
          />
          <div className="card-errors" role="alert">{error}</div>
        </div>
        <button type="submit" disabled={!stripe} className="CheckoutForm__button">Submit Payment</button>
      </form>
    </section>
  );
};

export default CheckoutForm;

// another way to use
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const { error, paymentMethod } = await stripe.createPaymentMethod({
//     type: 'card',
//     card: elements.getElement(CardElement),
//   });

//   if (!error) {
//     const { id } = paymentMethod;
//     try {
//       const response = await fetch('Api/charge', {
//         method: 'POST',
//         id,
//         amount: 1099,
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log('Hey here the error:', error);
//     }
//   }
// };
