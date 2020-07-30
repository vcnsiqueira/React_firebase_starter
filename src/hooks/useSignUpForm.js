import React, { useState } from 'react';

const useSignUpForm = (callback) => {

    const initialInputs = ['', '', '', '']

    const [inputs, setInputs] = useState({initialInputs});

    const handleSubmit = event => {
        event.preventDefault();
        callback();
    };
    
    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value }));
    };
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
};

export default useSignUpForm