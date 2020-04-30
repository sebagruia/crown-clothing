import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ReactComponent as ShopBag } from "../../assets/shopBag.svg";
import { hideRevealDropDownAction } from "../../redux/cartDropDown/cartDropDown.action";
import {selectCartItemsCount} from "../../redux/cartDropDown/cart.selectors";

const CartIcon = (props) => {
  const { dispatch, visibility, itemCount } = props;
  const handleClick = (visibility) => {
    dispatch(hideRevealDropDownAction(visibility));
  };
  return (
    <div className="cart-icon" onClick={() => handleClick(visibility)}>
      <ShopBag className="shopping-icon" />
  <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
    const {visibility} = state.cartReducer;
  return {
    visibility: visibility,
     /* Using array.reduce() function to get the number of all product in the Cart */
    itemCount: selectCartItemsCount(state)
  };
};

export default connect(mapStateToProps)(CartIcon);
