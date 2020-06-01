import Stripe from 'stripe';

// to do: past to .env
const stripe = new Stripe('sk_test_fBfaHhcO9NFEJaB85QczYUXv00cDyr49yh');

export default async (req, res) => {
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Ropita pa tu monstruo',
      payment_method: id,
      confirm: true,
    });

    console.log('here cart data', payment);

    return res.status(200).json({
      confirm: 'abc123',
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};
