import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { withAuthentication } from '../Session';
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

const App = () => {

    return (
        <Router>
            <Navigation />
            <main className="main-content">
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
            </main>
        </Router>
    )
}

export default withAuthentication(App);