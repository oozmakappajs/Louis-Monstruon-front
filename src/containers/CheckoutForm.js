/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CARD_ELEMENT_OPTIONS from './CheckoutFormStyles';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const response = await fetch('Api/charge', {
          method: 'POST',
          id,
          amount: 1099,
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log('Hey here the error:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <h2>Product name</h2>
        <h2>$10.99</h2>
        <label htmlFor="card-element">
          Credit or debit card
        </label>
        <CardElement
          id="card-element"
          options={CARD_ELEMENT_OPTIONS}
        />
      </div>
      <button type="submit" disabled={!stripe}>Submit Payment</button>
    </form>
  );
};

export default CheckoutForm;
