import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from "./pages/Homepage/homepage";
import ShopPage from "./pages/ShopPage/shopPage";
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"component={Homepage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
