import React from "react";
import './signIn-and-signUp.styles.scss';
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";

const SignInAndRegister = ()=>{
    return(
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInAndRegister;