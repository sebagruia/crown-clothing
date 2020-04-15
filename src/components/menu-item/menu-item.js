import React from "react";
import "./menu-item_styles.scss";

const MenuItem = (props)=>{
    const {title, imageUrl, size} = props;
    return(
        <div className={`menu-item ${size}`} style={{backgroundImage:`url(${imageUrl})`}}>
          <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
    );
}

export default MenuItem;