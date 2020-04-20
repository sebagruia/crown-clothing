import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from "./pages/Homepage/homepage";
import ShopPage from "./pages/ShopPage/shopPage";
import Header from "./components/header/header";
import SignInAndRegister from "./pages/signIn-and-register/signIn-and-register.js";
import {auth} from "./firebase/firebase.utils";
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/"component={Homepage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signIn-register" component={SignInAndRegister}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
