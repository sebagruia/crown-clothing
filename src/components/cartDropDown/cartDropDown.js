import React from "react";
import './cartDropDown.styles.scss';
import CustomButton from "../custom-button/custom-button";
 
const CartDropDown = (props)=>{

    return(
        <div className="cart-dropdown" >
            <div className="cart-items">

            </div>
           <CustomButton>
               GO TO CHECKOUT
           </CustomButton>
        </div>
    );
}


export default CartDropDown;

