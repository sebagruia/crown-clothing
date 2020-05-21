import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./pages/Homepage/homepage";
import ShopPage from "./pages/ShopPage/shopPage";
import SignInAndSignUp from "./pages/signIn-and-signUp/signIn-and-singUp.js";
import CheckOutPage from "./pages/CheckoutPage/checkoutPage";
import ContactPage from "./pages/ContactPage/contactPage";

import Header from "./components/header/header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = ({setCurrentUser, currentUser})=> {

useEffect(()=>{
  const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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
  return ()=>{
    unsubscribeFromAuth()
  };
},[setCurrentUser]);


  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);
  //       userRef.onSnapshot((snapShot) => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         });
  //       });
  //     } else {
  //       setCurrentUser(userAuth);
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   unsubscribeFromAuth();
  // }
  
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route
            exact
            path="/signIn-register"
            render={() => {
              return currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUp />
              );
            }}
          />
          <Route exact patch="/checkout" component={CheckOutPage} />
        </Switch>
      </div>
    );
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
