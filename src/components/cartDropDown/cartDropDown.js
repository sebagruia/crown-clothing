import React from "react";
import "./cartDropDown.styles.scss";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

const CartDropDown = (props) => {
  const { cartItems } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
  };
};

export default connect(mapStateToProps)(CartDropDown);
