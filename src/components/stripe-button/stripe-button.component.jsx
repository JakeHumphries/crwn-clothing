import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H2twKJxsJbO5pxAESN4OsIIB5TYpccxMISs1RbKzG5A31NfQQeZlzILQ02d1lGAEz7wCLrFPy1J9wwPUP12kZg100QYshnMyJ";

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful')
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;