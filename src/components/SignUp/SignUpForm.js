import React, { useState } from 'react';
import useSignUpForm from '../../hooks/useSignUpForm';

const SignUpForm = () => {

    const [error, setError] = useState(null);

    const onSubmit = () => {
        alert(`User Created!
                username: ${inputs.username}
                Email: ${inputs.email}`);
    }
    
    const { inputs, handleInputChange, handleSubmit } = useSignUpForm(onSubmit);

    console.log(inputs.passwordOne);
    console.log(inputs.passwordTwo);
    console.log(inputs.username);
    console.log(inputs.email);

    const isInvalid = 
        inputs.passwordOne !== inputs.passwordTwo ||
        inputs.passwordOne === '' ||
        inputs.email === '' ||
        inputs.username === '';

    return(
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                value={inputs.username}
                onChange={handleInputChange}
                type="text"
                placeholder="Full Name"
            />
            <input
                name="email"
                value={inputs.email}
                onChange={handleInputChange}
                type="text"
                placeholder="E-mail"
            />
            <input
                name="passwordOne"
                value={inputs.passwordOne}
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
            />
            <input
                name="passwordTwo"
                value={inputs.passwordTwo}
                onChange={handleInputChange}
                type="password"
                placeholder="Confirm Password"
            />
            <button type="submit" disabled={isInvalid}>Sign Up</button>
            {error && <p>{error.message}</p>}
        </form>
    );
}

export default SignUpForm;