import React, { useState } from 'react';
import './signUp.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";


const SignUp = ()=> {

    const[userCredentials, setUserCredentials] = useState({displayName: "", email: "", password: "", confirmPassword: "" });
    const {displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault(event);
        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
        }
        catch (error) {
            console.log('There was an Error', error);
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({...userCredentials, [name]: value})

    }

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your name, email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name="displayName"
                        value={displayName}
                        handleChange={handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type='email'
                        name="email"
                        value={email}
                        handleChange={handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type='password'
                        name="password"
                        value={password}
                        handleChange={handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type='password'
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>

            </div>
        );

}

export default SignUp;