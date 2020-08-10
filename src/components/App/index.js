import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { withFirebase } from '../Firebase';
import './App.css';

import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUpPage from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Home from '../Home';
import Account from '../Account';
import Admin from '../Admin';
import Error from '../Error';

import * as ROUTES from '../../constants/routes';

const App = (props) => {

    const [authUser, setAuthUser] = useState({ loggedIn: false });

    useEffect(() => {
        console.log('Entrou!')
        props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? setAuthUser({ loggedIn: true })
                : setAuthUser({ loggedIn: false });
        })
    }, []);

    return (
        <Router>
            <Navigation authUser={authUser}/>
            <Switch>
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignIn} />
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
                <Route path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.ACCOUNT} component={Account} />
                <Route path={ROUTES.ADMIN} component={Admin} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}

export default withFirebase(App);