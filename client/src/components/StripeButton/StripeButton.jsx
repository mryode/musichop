import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
  const priceInCents = price * 100;
  const publishableKey = 'pk_test_g8EAuGHdiyZCP7XUHPqg9ukK00OwJj6u3Z';

  const handleToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        token,
        amount: priceInCents,
      },
    })
      .then(() => {
        alert('Payment successful!');
      })
      .catch(err => {
        alert(err.response.data.error.message);
      });
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Musichop Ltd."
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceInCents}
        panelLabel="Pay Now"
        token={handleToken}
        stripeKey={publishableKey}
      />
    </div>
  );
}

StripeCheckoutButton.propTypes = {
  price: PropTypes.number,
};

export default StripeCheckoutButton;
