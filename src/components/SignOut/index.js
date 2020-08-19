import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignOutBase = (props) => {

    const signOut = () => {
        props.firebase.doSignOut()
            .then(() => {
                alert('Usuário desconectado com sucesso!');
                props.history.push(ROUTES.LANDING)
            })
            .catch(error => {
                console.error(error.message);
                alert('Houve algum problema ao tentar desconectar!')
            })
    }

    return(
        <a type="button" onClick={signOut}>
            Sair
        </a>
    );
};

const SignOut = compose(
    withRouter,
    withFirebase,
)(SignOutBase);

export default SignOut;