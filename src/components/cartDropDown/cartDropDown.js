import React, { Fragment } from "react";
import "./cartDropDown.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import cartArrowClose from "../../assets/close-cart-arrow.png";
import { selectCartItems } from "../../redux/cartDropDown/cart.selectors";
import { selectCartVisibility } from "../../redux/cartDropDown/cart.selectors";
import { hideRevealDropDownAction } from "../../redux/cartDropDown/cartDropDown.action";
import { useHistory, useLocation } from "react-router-dom";

const CartDropDown = ({ dispatch, cartItems, visibility, handleHamburger }) => {
  let history = useHistory();
  let location = useLocation();
  const handleClick = () => {
    history.push("/checkout");
    if (handleHamburger !== null) {
      handleHamburger();
    }
  };
  const handleVisibility = () => {
    dispatch(hideRevealDropDownAction(true));
  };
  return (
    <Fragment>
      {location.pathname !== "/checkout" ? (
        <div
          className="cart-dropdown"
          style={!visibility ? { display: "none" } : null}
        >
          <img
            onClick={handleVisibility}
            src={cartArrowClose}
            alt="close arrow"
            className="closeCartArrow"
            role="button"
          />

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
  visibility: selectCartVisibility,
});

export default connect(mapStateToProps)(CartDropDown);
