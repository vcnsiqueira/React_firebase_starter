import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import SignupImage from '../../assets/images/signup_image.jpg';

import { SignupFormContainer, SignupFormWrapper, SignupFormImage, SignUpFormInput } from './styled/SignUpForm.styled';
import SignInLink from '../SignIn/SignInLink'; 

import validate from './SignUpFormValidationRules';
import ButtonAuth from '../Button/ButtonAuth';
import Input from '../Input/Input';
import Loader from '../Loader';
import DialogModal from '../Modal/DialogModal';
import { parseFirebaseDate } from '../../helpers/dateHelper';

const SignUpFormBase = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [dialogTypeMessage, setDialogTypeMessage] = useState('');
    
    useEffect(() => { // Every time the values change (input changes, for instance), we update the errors. This is being done because we want changes in the ui at every input change.
        if(Object.keys(errors).length !== 0) {
            //console.log([username, email, passwordOne, passwordTwo]);
            setErrors(validate(username, email, passwordOne, passwordTwo));
        }
    }, [username, email, passwordOne, passwordTwo]);

    const onSubmit = event => {
        setIsLoading(true);
        props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Creating the user into Firebase Firestore database
                return props.firebase.db
                    .collection('users')
                    .doc(authUser.user.uid)
                    .set({
                        name: username,
                        email: email,
                    }, { merge: true });
            })
            .then(() => {
                //console.log('Deu certo o registro')
                setDialogTypeMessage('success');
                setDialogMessage('Usuário cadastrado com sucesso!');
                setShowDialog(true);
                setIsLoading(false);
                setUsername('');
                setEmail('');
                setPasswordOne('');
                setPasswordTwo('');
                //props.history.push(ROUTES.SIGN_IN);
            })
            .catch(error => {
                console.error(error.message);
                setDialogTypeMessage('failure');
                setDialogMessage('Tem certeza que não está cadastrado? Se já tem cadastro, clique em entrar');
                setShowDialog(true);
                setIsLoading(false);
            });
    }

    const closeDialog = event => {
        setShowDialog(false);
        if (dialogTypeMessage === 'success') {
            props.history.push(ROUTES.HOME);
            props.firebase.db
                .collection('users')
                .doc(props.firebase.auth.currentUser.uid)
                .set({
                    creationDate: parseFirebaseDate(props.firebase.auth.currentUser.metadata.lastSignInTime),
                    lastLogin: parseFirebaseDate(props.firebase.auth.currentUser.metadata.lastSignInTime),
                }, { merge: true });
        }
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        let newErrors = validate(username, email, passwordOne, passwordTwo);
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0) {
            onSubmit();
        }
    };

    return(
        <Fragment>
            <SignupFormContainer>
                <SignupFormWrapper>
                    <h1>Registrar</h1>
                    <form onSubmit={handleSubmit}>
                        <SignUpFormInput>
                            <Input
                                className={`${errors.username && 'alert'}`}
                                name="username"
                                value={username}
                                onChange={event => setUsername(event.target.value)}
                                type="text"
                                placeholder="Nome Completo"
                            />
                            {errors.username && (
                                <p>{errors.username}</p>
                            )}
                        </SignUpFormInput>
                        <SignUpFormInput>
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
                        </SignUpFormInput>
                        <SignUpFormInput>
                            <Input
                                className={`${errors.passwordOne && 'alert'}`}
                                name="passwordOne"
                                value={passwordOne}
                                onChange={event => setPasswordOne(event.target.value)}
                                type="password"
                                placeholder="Senha"
                            />
                            {errors.passwordOne && (
                                <p>{errors.passwordOne}</p>
                            )}
                        </SignUpFormInput>
                        <SignUpFormInput>
                            <Input
                                className={`${errors.passwordTwo && 'alert'}`}
                                name="passwordTwo"
                                value={passwordTwo}
                                onChange={event => setPasswordTwo(event.target.value)}
                                type="password"
                                placeholder="Confirme sua senha"
                            />
                            {errors.passwordTwo && (
                                <p>{errors.passwordTwo}</p>
                            )}
                        </SignUpFormInput>
                        <ButtonAuth type="submit">Registrar</ButtonAuth>
                    </form>
                    <SignInLink/>
                </SignupFormWrapper>
                <SignupFormImage background={SignupImage}/>
            </SignupFormContainer>
            { isLoading ?
                <Loader/> :
                showDialog && (
                    <DialogModal type={dialogTypeMessage} closeDialog={closeDialog}>{dialogMessage}</DialogModal>
            )}
        </Fragment>
    );
};

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpForm;