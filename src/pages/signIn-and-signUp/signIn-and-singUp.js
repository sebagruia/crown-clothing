import React from "react";
import './signIn-and-signUp.styles.scss';
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";

const SignInAndSignUp = ()=>{
    return(
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInAndSignUp;