import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectTotalItemsPrice,
} from "../../redux/cartDropDown/cart.selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item";
import StripeButton from "../../components/stripeButton/stripeButton";

const CheckOutPage = ({ cartItems, totalItemsPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL:&#8364;{totalItemsPrice}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: current date - CVV: 123 for Visa Card
      </div>
      <StripeButton price={totalItemsPrice} />
    </div>
  );
};

const maspStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalItemsPrice: selectTotalItemsPrice,
});

export default connect(maspStateToProps)(CheckOutPage);
