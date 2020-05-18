import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg"; //this is another way to import svg files, the old way also works
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cartDropDown/cartDropDown";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartVisibility } from "../../redux/cartDropDown/cart.selectors";
import "./header.styles.scss";
import "./hamburger.styles.css";

const Header = ({ currentUser, visibility }) => {
  const [active, setActive] = useState("");
  const [style, setStyle] = useState({});
  const handleHamburger = () => {
    if (active === "") {
      setActive("is-active");
      setStyle({transform: "translate(0,0)"});
    } else {
      setActive("");
      setStyle({transform: "translate(-300px,0)"});
    }
  };
  return (
    <div className="header">
      <Link to="/" className="logo-container" onClick = {active!==""? handleHamburger :null}>
        <Logo className="logo" alt="crown" />
      </Link>
      <div
        className="options"
        style={ style }
      >
        <Link to="/shop" className="option" onClick = {active!==""? handleHamburger :null}>
          SHOP
        </Link>
        <Link to="/contact" className="option" onClick = {active!==""? handleHamburger :null}>
          CONTACT
        </Link>
        {currentUser ? (
          // signOut() is a firebase auth service function for signing out the user
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn-register" onClick = {active!==""? handleHamburger :null}>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      <button
        onClick={handleHamburger}
        className={`hamburger hamburger--arrow ${active}`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {visibility ? <CartDropDown handleHamburger={active!==""? handleHamburger :null}/> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  visibility: selectCartVisibility,
});

export default connect(mapStateToProps)(Header);
