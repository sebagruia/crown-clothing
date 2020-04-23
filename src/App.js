import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage/homepage";
import ShopPage from "./pages/ShopPage/shopPage";
import Header from "./components/header/header";
import SignInAndRegister from "./pages/signIn-and-signUp/signIn-and-singUp.js";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser:user});
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      else {
        this.setState({ currentUser: userAuth });
      }
      
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn-register" component={SignInAndRegister} />
        </Switch>
      </div>
    );
  }

}

export default App;
