import React, {Fragment, useState, useEffect } from 'react';

import { withFirebase } from '../Firebase';

import PasswordForgetImage from '../../assets/images/password_forget_image.jpg';

import { PasswordForgetFormContainer, PasswordForgetFormWrapper, PasswordForgetFormImage } from './styled/PasswordForgetForm.styled';

import validatePasswordForget from './PasswordForgetFormValidationRules';
import ButtonAuth from '../Button/ButtonAuth';
import Input from '../Input/Input';
import Loader from '../Loader';
import DialogModal from '../Modal/DialogModal';

const PasswordForgetFormBase = (props) => {

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [dialogTypeMessage, setDialogTypeMessage] = useState('');
    
    useEffect(() => { // Every time the values change (input changes, for instance), we update the errors. This is being done because we want changes in the ui at every input change.
        if(Object.keys(errors).length !== 0) {
            //console.log([username, email, passwordOne, passwordTwo]);
            setErrors(validatePasswordForget(email));
        }
    }, [email]);

    const onSubmit = event => {
        setIsLoading(true);
        props.firebase.doPasswordReset(email)
            .then(() => {
                setDialogTypeMessage('success');
                setDialogMessage('Verifique seu e-mail para cadastrar uma nova senha!');
                setShowDialog(true);
                setIsLoading(false);
                setEmail('');
            })
            .catch(error => {
                console.error(error.message);
                setDialogTypeMessage('failure');
                setDialogMessage('Este e-mail de usuário não consta no banco de dados. Verifique se você possui um registro válido');
                setShowDialog(true);
                setIsLoading(false);
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

    const closeDialogModal = event => {
        setShowDialog(false);
    }

    return(
        <Fragment>
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
            { isLoading ?
                <Loader /> :
                showDialog && (
                    <DialogModal type={dialogTypeMessage} closeDialog={closeDialogModal}>{dialogMessage}</DialogModal>
            )}
        </Fragment>
    );

};

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default PasswordForgetForm;