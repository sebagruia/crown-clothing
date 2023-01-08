import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { redirect, Route, Routes } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';

import CheckOutPage from './pages/CheckoutPage/checkoutPage';
import ContactPage from './pages/ContactPage/contactPage';
import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/ShopPage/shopPage';
import SignInAndSignUp from './pages/signIn-and-signUp/signIn-and-singUp.js';

import Header from './components/header/header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { emptyCartItems, fetchAllCartItemsAction } from './redux/cartDropDown/cartDropDown.action';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ setCurrentUser, currentUser, fetchAllCartItemsAction, emptyCartItems }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          fetchAllCartItemsAction(snapShot.id);
        });
      } else {
        setCurrentUser(userAuth);
        emptyCartItems();
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser, fetchAllCartItemsAction, emptyCartItems]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop/*" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/signIn-register"
          element={currentUser ? <Homepage /> : <SignInAndSignUp />}
        />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </div>
  );
};
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
    fetchAllCartItemsAction: (currentUSerId) => dispatch(fetchAllCartItemsAction(currentUSerId)),
    emptyCartItems: () => dispatch(emptyCartItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
