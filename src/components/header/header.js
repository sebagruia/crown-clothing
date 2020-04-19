import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg"; //this is another way to import svg files, the old way also works
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" alt="crown" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
