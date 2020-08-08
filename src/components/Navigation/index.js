import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationList, NavigationListItem } from './styled/Navigation.styled';

import * as ROUTES from '../../constants/routes';

import SignOut from '../SignOut';

const Navigation = () => {
    return(
        <nav>
            <NavigationList>
                <NavigationListItem>
                    Marca
                </NavigationListItem>
                <NavigationListItem>
                    <Link to={ROUTES.SIGN_IN} style={{textDecoration: 'none', color: 'white'}}>Sign In</Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to={ROUTES.LANDING} style={{textDecoration: 'none', color: 'white'}}>Landing</Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to={ROUTES.HOME} style={{textDecoration: 'none', color: 'white'}}>Home</Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to={ROUTES.ACCOUNT} style={{textDecoration: 'none', color: 'white'}}>Account</Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to={ROUTES.ADMIN} style={{textDecoration: 'none', color: 'white'}}>Admin</Link>
                </NavigationListItem>
                <NavigationListItem>
                    <SignOut />
                </NavigationListItem>
            </NavigationList>
        </nav>
    );
};

export default Navigation;