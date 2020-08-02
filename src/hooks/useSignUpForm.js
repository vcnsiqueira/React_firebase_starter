import { useState, useEffect } from 'react';

const useSignUpForm = (callback, validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => { // This useEffect verifies if there is any error to call the callback function. The test happens every single time there is any change in the errors variable
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    useEffect(() => { // Every time the values change (input changes, for instance), we update the errors. This is being done because we want changes in the ui at every input change.
        if(Object.keys(errors).length !== 0 && isChanging) {
            console.log(values);
            setErrors(validate(values));
            setIsSubmitting(false);     // this code guarantees that we only call the callback function when the user clicks to submit the form
        }
    }, [values])
    
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
        setIsChanging(true);
    };

    return {
        handleSubmit,
        handleInputChange,
        values,
        errors,
    };
};

export default useSignUpForm