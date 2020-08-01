import React, { useState } from 'react';
import SignUpImage from '../../assets/images/signup-image.jpg';
import './SignUp.css';

import useSignUpForm from '../../hooks/useSignUpForm';
import validate from './SignUpFormValidationRules';
import Button from '../Button/Button';
import Input from '../Input/Input';

const SignUpForm = () => {

    const onSubmit = () => {
        alert(`User Created!
                username: ${values.username}
                Email: ${values.email}`);
    }
    
    const { values, handleInputChange, handleSubmit, errors } = useSignUpForm(onSubmit, validate);

    return(
        <div className="SignUp_wrapper">
            <div className="SignUp_form">
                <form onSubmit={handleSubmit}>
                    <Input
                        className={`${errors.username && 'alert'}`}
                        name="username"
                        value={values.username || ''}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Full Name"
                    />
                    {errors.username && (
                        <p>{errors.username}</p>
                    )}
                    <Input
                        className={`${errors.email && 'alert'}`}
                        name="email"
                        value={values.email || ''}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="E-mail"
                    />
                    {errors.email && (
                        <p>{errors.email}</p>
                    )}
                    <Input
                        className={`${errors.passwordOne && 'alert'}`}
                        name="passwordOne"
                        value={values.passwordOne || ''}
                        onChange={handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    {errors.passwordOne && (
                        <p>{errors.passwordOne}</p>
                    )}
                    <Input
                        className={`${errors.passwordTwo && 'alert'}`}
                        name="passwordTwo"
                        value={values.passwordTwo || ''}
                        onChange={handleInputChange}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    {errors.passwordTwo && (
                        <p>{errors.passwordTwo}</p>
                    )}
                    <Button type="submit">Sign Up</Button>
                    {/*{error && <p>{error.message}</p>}*/}
                </form>
            </div>
            <div className="SignUp_image">
                <img src={SignUpImage} alt="SignUp image"/>
            </div>
        </div>
    );
}

export default SignUpForm;