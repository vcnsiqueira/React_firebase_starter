import React, { useState, useEffect } from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    
    const WithAuthentication = (props) => {

        const [authUser, setAuthUser] = useState(null);

        useEffect(() => {
            /*props.firebase.auth.onAuthStateChanged(authUser => {
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
                            };

                            //merge auth and db user
                            authUser = {
                                uid: authUser.uid,
                                email: authUser.email,
                                ...dbUser,
                            };

                            setAuthUser(authUser);
                        });
                } else {
                    setAuthUser(null);
                }
            });*/
            props.firebase.onAuthUserListener(
                authUser => {
                    setAuthUser(authUser);
                }, () => {
                    setAuthUser(null);
                },
            );
        }, []);
    
        return(
            <AuthUserContext.Provider value={authUser}>
                <Component {...props} />
            </AuthUserContext.Provider>
        );
    };    

    return withFirebase(WithAuthentication);
};

export default withAuthentication;