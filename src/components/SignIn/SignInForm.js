import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import SignInImage from '../../assets/images/signin_image.jpg';

import { SignInFormContainer, SignInFormWrapper, SignInFormInput, SignInFormImage } from './styled/SignInForm.styled';
import SignUpLink from '../SignUp/SignUpLink';
import PasswordForgetLink from '../PasswordForget/PasswordForgetLink';

import validateSignIn from './SignInFormValidationRules';
import ButtonAuth from '../Button/ButtonAuth';
import Input from '../Input/Input';
import Loader from '../Loader';
import DialogModal from '../Modal/DialogModal';

const SignInFormBase = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    
    useEffect(() => { // Every time the values change (input changes, for instance), we update the errors. This is being done because we want changes in the ui at every input change.
        if(Object.keys(errors).length !== 0) {
            //console.log([username, email, passwordOne, passwordTwo]);
            setErrors(validateSignIn(email, password));
        }
    }, [email, password]);

    const onSubmit = event => {
        setIsLoading(true);
        props.firebase.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                //alert('Colocar um loader!');
                setEmail('');
                setPassword('');
                setIsLoading(false);
                props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                console.error(error.message);
                setDialogMessage('O e-mail ou a senha estão errados! Tente novamente');
                setShowDialog(true);
                setIsLoading(false);
            });
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        let newErrors = validateSignIn(email, password);
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0) {
            onSubmit();
        }
    };

    return(
        <Fragment>
            <SignInFormContainer>
                <SignInFormWrapper>
                    <h1>Entrar</h1>
                    <form onSubmit={handleSubmit}>
                        <SignInFormInput>
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
                        </SignInFormInput>
                        <SignInFormInput>
                            <Input
                                className={`${errors.password && 'alert'}`}
                                name="passwordOne"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                                type="password"
                                placeholder="Senha"
                            />
                            {errors.password && (
                                <p>{errors.password}</p>
                            )}
                        </SignInFormInput>
                        <ButtonAuth type="submit">Entrar</ButtonAuth>
                    </form>
                    <PasswordForgetLink />
                    <SignUpLink />
                </SignInFormWrapper>
                <SignInFormImage background={SignInImage}/>
            </SignInFormContainer>
            { isLoading ?
                <Loader/> :
                showDialog && (
                    <DialogModal type= "failure" closeDialog={event => setShowDialog(false)}>{dialogMessage}</DialogModal>
            )}
        </Fragment>
    );

};

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);



//old code
/*const SignUpFormBase = () => {

    //const [firebaseError, setFirebaseError] = useState({});

    const onSubmit = () => {
        props.firebase.doCreateUserWithEmailAndPassword(values.email, values.passwordOne)
            .then(authUser => {
                clearValues();
                props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                console.log(error);
                setFirebaseError({ error });
                console.log(firebaseError);
            })
        alert(`User Created!
                username: ${values.username}
                Email: ${values.email}`);
    }
    
    const { values, handleInputChange, handleSubmit, clearValues,  errors } = useSignUpForm(onSubmit, validate);

    return(
        <SignupFormContainer>
            <SignupFormWrapper>
                <h1>Registrar</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        className={`${errors.username && 'alert'}`}
                        name="username"
                        value={values.username || ''}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Nome Completo"
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
                        placeholder="Senha"
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
                        placeholder="Confirme sua senha"
                    />
                    {errors.passwordTwo && (
                        <p>{errors.passwordTwo}</p>
                    )}
                    <Button type="submit">Registrar</Button>
                </form>
            </SignupFormWrapper>
            <SignupFormImage background={SignupImage}/>
        </SignupFormContainer>
    );
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);*/

export default SignInForm;