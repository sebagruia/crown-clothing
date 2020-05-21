import React, { useState} from "react";
import "./signIn.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = ()=> {


  const [userCredentials, setCredentials] = useState({email:'', password:''})
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
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

 const handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    setCredentials({...userCredentials, [name]: value });
  };

  
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            handleChange={handleChange}
            name="email"
            type="email"
            value={email}
            label="email"
            required
          />
          <FormInput
            handleChange={handleChange}
            name="password"
            type="password"
            value={password}
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

export default SignIn;
