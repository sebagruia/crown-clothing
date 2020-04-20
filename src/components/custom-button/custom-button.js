import React from "react";
import './custom-button.styles.scss';

const CustomButton = (props)=>{
    const {children, onClick, isGoogleSignIn} = props;
    return(
        <button onClick = {onClick} className={`${isGoogleSignIn? "google-sign-in" : ""} custom-button`}>
            {children}
        </button>
    );
}

export default CustomButton;
