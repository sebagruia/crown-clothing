import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import cartArrowClose from "../../assets/close-cart-arrow.png";
import { selectCartItems, selectCartVisibility } from "../../redux/cartDropDown/cart.selectors";
import { hideRevealDropDownAction } from "../../redux/cartDropDown/cartDropDown.action";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import "./cartDropDown.styles.scss";

const CartDropDown = ({ dispatch, cartItems, visibility, handleHamburger }) => {
  let navigate = useNavigate();
  let location = useLocation();
  const handleClick = () => {
    navigate("/checkout");
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
