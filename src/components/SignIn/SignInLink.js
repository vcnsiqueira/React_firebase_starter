import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { SignInLinkStyled } from './styled/SignInForm.styled'

const SignInLink = () => {
    return(
        <SignInLinkStyled>
            Já é cadastrado? <Link to={ROUTES.SIGN_IN} style={{textDecoration: 'none', color: '#3F51B5', fontWeight: 'bold'}}>Entrar</Link>
        </SignInLinkStyled>
    );
};

export default SignInLink;