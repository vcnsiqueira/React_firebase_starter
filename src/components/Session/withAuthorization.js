import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
    const WithAuthorization = (props) => {
        
        useEffect(() => {
            /*props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (authUser) {
                        props.firebase.db
                            .collection('users')
                            .doc(authUser.uid)
                            .get()
                            .then(snapshot => {
                                const dbUser = snapshot.data();

                                // default empty roles
                                if(!dbUser.roles) {
                                    dbUser.roles = {};
                                }

                                // merge auth and db user
                                authUser = {
                                    uid: authUser.uid,
                                    email: authUser.email,
                                    ...dbUser,
                                };

                                if(!condition(authUser)) {
                                    props.history.push(ROUTES.LANDING);
                                }
                            })
                    } else {
                        props.history.push(ROUTES.LANDING);                       
                    }                    
                },
            );*/
            props.firebase.onAuthUserListener(
                authUser => {
                    if(!condition(authUser)) {
                        props.history.push(ROUTES.LANDING);
                    }
                },
                /*() => props.history.push(ROUTES.LANDING),*/
            );
        },[]);

        return (
            <AuthUserContext.Consumer>
                {authUser => 
                    condition(authUser) ? <Component {...props} /> : null
                }
            </AuthUserContext.Consumer>
        );
    }

    return compose(
        withRouter,
        withFirebase
    )(WithAuthorization);
}

export default withAuthorization;