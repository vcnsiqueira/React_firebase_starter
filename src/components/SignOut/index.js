import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import Button from '../Button/Button';

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
        <Button type="button" color="#e53935" variant="solid" onClick={signOut}>
            Sair
        </Button>
    );
};

const SignOut = compose(
    withRouter,
    withFirebase,
)(SignOutBase);

export default SignOut;