import React, { Fragment } from "react";
import "./cartDropDown.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cartDropDown/cart.selectors";
import { useHistory, useLocation } from "react-router-dom";

const CartDropDown = ({cartItems}) => {
  let history = useHistory();
  let location = useLocation();
  const handleClick = () => {
    history.push("/checkout");
  };
  return (
    <Fragment>
      {location.pathname !== "/checkout" ? (
        <div className="cart-dropdown">
          <div className="cart-items">
            {cartItems.length ? (
              cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))
            ) : (
              <span className="empty-message">Your cart is empty</span>
            )}
          </div>
          <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
