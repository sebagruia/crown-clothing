import React, { Component } from "react";
import "./signIn.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode==="auth/wrong-password"){
        alert('Wrong password');
      }
      else{
        alert(errorMessage)
      }
      console.log('An error when Signing In', error);
    }

    
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;
