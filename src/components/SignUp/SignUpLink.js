import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignUpLink = () => {
    <p>
        Ainda não tem uma conta? <Link to={ROUTES.SIGN_UP}>Cadastre-se</Link>
    </p>
}

export default SignUpLink;