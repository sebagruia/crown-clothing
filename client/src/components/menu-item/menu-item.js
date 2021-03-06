import React from "react";
import {withRouter} from "react-router-dom";
import "./menu-item_styles.scss";

const MenuItem = (props) => {
  const { title, imageUrl, size, linkUrl, history, match } = props;
  return (
    <div className={`menu-item ${size}`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
