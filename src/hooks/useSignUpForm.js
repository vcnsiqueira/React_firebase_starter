import React, { useState, useEffect } from 'react';

const useSignUpForm = (callback, validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => { // This useEffect verifies if there is any error to call the callback function. The test happens every single time there is any change in the errors variable
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);
    
    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        }
        setIsSubmitting(true);
        setErrors(validate(values));
    };
    
    const handleInputChange = event => {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value }));
        setErrors(validate(values));
    };

    return {
        handleSubmit,
        handleInputChange,
        values,
        errors,
    };
};

export default useSignUpForm