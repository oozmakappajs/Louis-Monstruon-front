/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
// import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

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
      // trying with axios
      // try {
      //   const { data } = await axios.post('/api/charge', { id, amount: 1099 });
      //   console.log(data);
      //   success();
      // } catch (error) {
      //   console.log(error);
      // }
      try {
        const response = await fetch('/Api/charge', {
          method: 'post',
          id,
          amount: 15000,
        });
        const data = await response.json();
        consolelog(data);

      } catch (error) {
        console.log('Hey here the error:', error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Product name</h2>
      <h2>$150.00</h2>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay</button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_s9yfSxszCqB1k7qTbuUMF4wQ00uWkgY9ZC');

const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePayment;
