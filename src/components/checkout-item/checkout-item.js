import React from "react";
import {connect} from "react-redux";
import {clearItemFromCartAction,removeItemAction, addItemAction} from "../../redux/cartDropDown/cartDropDown.action";
import "./checkout-item.styles.scss";

const CheckOutItem = (props)=>{
    const {dispatch,cartItem} = props;
    const {name,imageUrl,price,quantity} = cartItem;
    const handleRemoveItemFromCart = ()=>{
        dispatch(clearItemFromCartAction(cartItem));
    }
    const handleRemoveItem = ()=>{
        dispatch(removeItemAction(cartItem));
    }
    const handleAddItem = ()=>{
        dispatch(addItemAction(cartItem));
    }
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick = {handleRemoveItem} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick = {handleAddItem} className="arrow">&#10095;</div>
                </span>
            <span className="price">${price}</span>
            <div onClick = {handleRemoveItemFromCart} className="remove-button">
                &#10005;
            </div>
        </div>
    );
}
export default connect()(CheckOutItem);