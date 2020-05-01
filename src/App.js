import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./pages/Homepage/homepage";
import ShopPage from "./pages/ShopPage/shopPage";
import SignInAndSignUp from "./pages/signIn-and-signUp/signIn-and-singUp.js";
import CheckOutPage from "./pages/checkout/checkout";

import Header from "./components/header/header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signIn-register"
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUp />
              );
            }}
          />
          <Route exact patch="/checkout" component={CheckOutPage}/>
        </Switch>
      </div>
    );
  }
}
// ==== We can use the "createStructuredSelector" function provided by Reselect library. This function passes automaticaly the whole "state". So instead of writing ==== ->
// const mapStateToProps = (state)=>{
//   return {
//     currentUser:selectCurrentUser(state)
//   }
// }

//==== We can write ->
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
