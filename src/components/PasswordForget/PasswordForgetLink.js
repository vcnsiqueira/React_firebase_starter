import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { PasswordForgetLinkStyled } from './styled/PasswordForgetForm.styled'

const PasswordForgetLink = () => {
    return(
        <PasswordForgetLinkStyled>
            Esqueceu a senha? <Link to={ROUTES.PASSWORD_FORGET} style={{textDecoration: 'none', color: '#3F51B5', fontWeight: 'bold'}}>Trocar a senha</Link>
        </PasswordForgetLinkStyled>
    );
};

export default PasswordForgetLink;