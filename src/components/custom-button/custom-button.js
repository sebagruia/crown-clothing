import React from "react";
import './custom-button.styles.scss';

const CustomButton = (props)=>{
    const {children} = props;
    return(
        <button className="custom-button">
            {children}
        </button>
    );
}

export default CustomButton;
