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
        <span href="#" type="button" onClick={signOut}>
            <i className="fas fa-sign-out-alt"/>Sair
        </span>
    );
};

const SignOut = compose(
    withRouter,
    withFirebase,
)(SignOutBase);

export default SignOut;