import React, { useState, useEffect } from 'react';

import { withFirebase } from '../Firebase';

import PasswordForgetImage from '../../assets/images/password_forget_image.jpg';

import { PasswordForgetFormContainer, PasswordForgetFormWrapper, PasswordForgetFormImage } from './styled/PasswordForgetForm.styled';

import validatePasswordForget from './PasswordForgetFormValidationRules';
import ButtonAuth from '../Button/ButtonAuth';
import Input from '../Input/Input';

const PasswordForgetFormBase = (props) => {

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    
    useEffect(() => { // Every time the values change (input changes, for instance), we update the errors. This is being done because we want changes in the ui at every input change.
        if(Object.keys(errors).length !== 0) {
            //console.log([username, email, passwordOne, passwordTwo]);
            setErrors(validatePasswordForget(email));
        }
    }, [email]);

    const onSubmit = event => {
        props.firebase.doPasswordReset(email)
            .then(() => {
                alert('Colocar um loader!');
                setEmail('');
            })
            .catch(error => {
                console.error(error.message);
                alert('Este e-mail de usuário não consta no banco de dados. Verifique se você possui um registro válido')
            });
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        let newErrors = validatePasswordForget(email);
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0) {
            onSubmit();
        }
    };

    return(
        <PasswordForgetFormContainer>
            <PasswordForgetFormWrapper>
                <h1>Esqueceu a Senha?</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        className={`${errors.email && 'alert'}`}
                        name="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        type="text"
                        placeholder="E-mail"
                    />
                    {errors.email && (
                        <p>{errors.email}</p>
                    )}
                    <ButtonAuth type="submit">Nova Senha</ButtonAuth>                    
                </form>
                {/*<SignUpLink />*/}
            </PasswordForgetFormWrapper>
            <PasswordForgetFormImage background={PasswordForgetImage}/>
        </PasswordForgetFormContainer>
    );

};

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default PasswordForgetForm;