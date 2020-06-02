import React from "react";
import {connect} from "react-redux";
import {addItemsToFirestore, substractItemFromFirestore,removeItemFromFirestore } from "../../firebase/firebase.utils"
import {selectCurrentUserId} from "../../redux/user/user.selectors"
import "./checkout-item.styles.scss";
import { createStructuredSelector } from "reselect";

const CheckOutItem = (props)=>{
    const {cartItem, currentUserId} = props;
    const {name,imageUrl,price,quantity} = cartItem;
    const handleRemoveItemFromCart = ()=>{
        removeItemFromFirestore('cartItems', cartItem, currentUserId);
    }
    const handleRemoveItem = ()=>{
        substractItemFromFirestore('cartItems', cartItem, currentUserId);
    }
    const handleAddItem = ()=>{
        addItemsToFirestore('cartItems', cartItem, currentUserId);
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
            <span className="price">&#8364;{price}</span>
            <div onClick = {handleRemoveItemFromCart} className="remove-button">
                &#10005;
            </div>
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    currentUserId : selectCurrentUserId
})
export default connect(mapStateToProps)(CheckOutItem);