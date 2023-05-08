const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.subscriptionPayment = async (req, res) => {
  try {
    const { name, email, paymentMethod } = req.body;

    // Create a customer
    const customer = await stripe.customers.create({
      name,
      email,
      payment_method: paymentMethod,
      invoice_settings: {
        default_payment_method: paymentMethod,
      },
    });

    // Create a subscription
    await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: "YOUR_PRICE_ID",
        },
      ],
    });

    // Generate a client secret for confirming the payment on the front-end
    const paymentIntent = await stripe.paymentIntents.create({
      customer: customer.id,
      payment_method: paymentMethod,
      currency: "usd",
      amount: 1000, // Replace with the actual amount in cents
      confirm: true,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the payment." });
  }
};
