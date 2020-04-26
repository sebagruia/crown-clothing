import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg"; //this is another way to import svg files, the old way also works
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cartDropDown/cartDropDown";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser, visibility }) => {
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
        {currentUser ? (
          // signOut() is a firebase auth service function for signing out the user
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn-register">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {visibility ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    visibility: state.hideRevealDropDownReducer.visibility,
  };
};

export default connect(mapStateToProps)(Header);
