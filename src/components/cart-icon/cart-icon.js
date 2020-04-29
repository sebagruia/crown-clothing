import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ReactComponent as ShopBag } from "../../assets/shopBag.svg";
import { hideRevealDropDownAction } from "../../redux/cartDropDown/cartDropDown.action";



const CartIcon = (props) => {
    const {visibility, dispatch} = props;
    const handleClick = (visibility)=>{
            dispatch(hideRevealDropDownAction(visibility));
    }
    return (
        <div className="cart-icon" onClick={()=>handleClick(visibility)} >
            <ShopBag className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        visibility: state.cartReducer.visibility
    }


}

export default connect(mapStateToProps)(CartIcon);