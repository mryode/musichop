if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(port, err => {
  if (err) throw err;
  console.log(`Server listening on port ${port}`);
});

app.post('/payment', (req, res) => {
  const { token, amount } = req.body;

  const stripeBody = {
    source: token.id,
    amount,
    currency: 'usd',
  };

  stripe.charges
    .create(stripeBody)
    .then(stripeRes => {
      res.status(200).json({ success: stripeRes });
    })
    .catch(stripeErr => {
      res.status(500).json({ error: stripeErr });
    });
});