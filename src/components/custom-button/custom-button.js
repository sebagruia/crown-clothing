import React from "react";
import './custom-button.styles.scss';

const CustomButton = (props)=>{
    const {children, onClick, isGoogleSignIn, type} = props;
    return(
        <button type = {type} onClick = {onClick} className={`${isGoogleSignIn? "google-sign-in" : ""} custom-button`}>
            {children}
        </button>
    );
}

export default CustomButton;
