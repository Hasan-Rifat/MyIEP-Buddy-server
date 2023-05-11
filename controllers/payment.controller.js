const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.getAllUser = async (req, res) => {
  try {
    const subscriptions = await stripe.subscriptions.list();
    const subscribers = [];

    for (const subscription of subscriptions.data) {
      const customer = await stripe.customers.retrieve(subscription.customer);
      subscribers.push({
        userId: customer.id,
        email: customer.email,
        subscriptionId: subscription.id,
        planId: subscription.items.data[0].price.id,
        status: subscription.status,
      });
    }

    res.status(200).json(subscribers);
  } catch (error) {
    console.error("Error retrieving subscribers:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};
