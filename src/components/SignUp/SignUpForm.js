import React from 'react';
import SignupImage from '../../assets/images/back_image.jpg';
import { SignupFormContainer, SignupFormWrapper, SignupFormImage } from './styled/SignupForm.styled';

import useSignUpForm from '../../hooks/useSignUpForm';
import validate from './SignUpFormValidationRules';
import Button from '../Button/Button';
import Input from '../Input/Input';

const SignUpForm = () => {

    const onSubmit = () => {
        alert(`User Created!
                username: ${values.username}
                Email: ${values.email}`);
    }
    
    const { values, handleInputChange, handleSubmit, errors } = useSignUpForm(onSubmit, validate);

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
                    {/*{error && <p>{error.message}</p>}*/}
                </form>
            </SignupFormWrapper>
            <SignupFormImage background={SignupImage}/>
        </SignupFormContainer>
    );
}

export default SignUpForm;