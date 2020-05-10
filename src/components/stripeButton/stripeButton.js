import React from "react";
import logo from "../../assets/crown.svg";
import "./stripeButton.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_fFFuoNgySTQOcwIP0fu0qaYp00UJsL7YrC";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is  ${price} Euro`}
      amount={priceForStripe}
      currency="EUR"
      pannelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};



export default StripeButton;
