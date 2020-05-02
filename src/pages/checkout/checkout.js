import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectTotalItemsPrice} from "../../redux/cartDropDown/cart.selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item";
import "./checkout.styles.scss";

const CheckOutPage = ({cartItems, totalItemsPrice}) => {
 
  return (
  <div className="checkout-page" >
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
      {
          cartItems.map(cartItem=>
            <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
            
            )
      }
      <div className="total">
    <span>TOTAL:${totalItemsPrice}</span>
      </div>
  </div>
  )
};

const maspStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    totalItemsPrice:selectTotalItemsPrice
});

export default connect(maspStateToProps)(CheckOutPage);
