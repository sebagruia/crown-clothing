import React from "react";
import './custom-button.styles.scss';

const CustomButton = (props)=>{
    const {children, onClick, isGoogleSignIn, inverted, type} = props;
    return(
        <button type = {type}  onClick = {onClick} className={`${inverted? "inverted" : ""}${isGoogleSignIn? "google-sign-in" : ""} custom-button`}>
            {children}
        </button>
    );
}

export default CustomButton;
