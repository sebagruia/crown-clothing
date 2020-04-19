import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from "./pages/Homepage/homepage";
import ShopPage from "./pages/ShopPage/shopPage";
import Header from "./components/header/header";
import SignInAndRegister from "./pages/signIn-and-register/signIn-and-register.js";
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/"component={Homepage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signIn-register" component={SignInAndRegister}/>
      </Switch>
    </div>
  );
}

export default App;
