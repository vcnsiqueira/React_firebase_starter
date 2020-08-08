import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { SignUpLinkStyled } from './styled/SignUpForm.styled'

const SignUpLink = () => {
    return(
        <SignUpLinkStyled>
            Ainda não tem uma conta? <Link to={ROUTES.SIGN_UP} style={{textDecoration: 'none', color: '#3F51B5', fontWeight: 'bold'}}>Cadastre-se</Link>
        </SignUpLinkStyled>
    );
};

export default SignUpLink;