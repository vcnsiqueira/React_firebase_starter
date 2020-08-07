import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import SignupImage from '../../assets/images/back_image.jpg';

import { SignupFormContainer, SignupFormWrapper, SignupFormImage } from './styled/SignupForm.styled';

import validate from './SignUpFormValidationRules';
import Button from '../Button/Button';
import Input from '../Input/Input';

const SignUpFormBase = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [errors, setErrors] = useState({});
    
    useEffect(() => { // Every time the values change (input changes, for instance), we update the errors. This is being done because we want changes in the ui at every input change.
        if(Object.keys(errors).length !== 0) {
            //console.log([username, email, passwordOne, passwordTwo]);
            setErrors(validate(username, email, passwordOne, passwordTwo));
        }
    }, [username, email, passwordOne, passwordTwo]);

    const onSubmit = async () => {
        try {
            await props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
            alert('Usuário cadastrado com sucesso')
            setUsername('');
            setEmail('');
            setPasswordOne('');
            setPasswordTwo('');
            props.history.push(ROUTES.HOME)
        } catch(error) {
            console.log(error.message);
        };
        /*alert(`User Created!
                username: ${username}
                Email: ${email}`);*/
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
        <SignupFormContainer>
            <SignupFormWrapper>
                <h1>Registrar</h1>
                <form onSubmit={handleSubmit}>
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
                    <Button type="submit">Registrar</Button>
                </form>
            </SignupFormWrapper>
            <SignupFormImage background={SignupImage}/>
        </SignupFormContainer>
    );

};

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);



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

export default SignUpForm;