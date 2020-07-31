import React, { useState } from 'react';

import useSignUpForm from '../../hooks/useSignUpForm';
import validate from './SignUpFormValidationRules';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Label from '../Label/Label';


const SignUpForm = () => {

    const onSubmit = () => {
        alert(`User Created!
                username: ${values.username}
                Email: ${values.email}`);
    }
    
    const { values, handleInputChange, handleSubmit, errors } = useSignUpForm(onSubmit, validate);

    return(
        <form onSubmit={handleSubmit}>
            <Label>Nome</Label>
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
            <Label>Email</Label>
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
            <Label>Senha</Label>
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
            <Label>Confirmar Senha</Label>
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
    );
}

export default SignUpForm;