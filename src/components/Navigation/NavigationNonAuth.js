import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationBar, NavigationBrand, NavigationLogo, NavigationItems, NavigationList, NavigationListItem } from './styled/Navigation.styled';

import * as ROUTES from '../../constants/routes';

import Button from '../Button/Button';

const NavigationNonAuth = () => {
    return(
        <NavigationBar>
            <NavigationBrand>
                <h1>Marca</h1>
            </NavigationBrand>
            <NavigationLogo>
                <h1>Logo</h1>
            </NavigationLogo>
            <NavigationItems>
                <NavigationList>
                    <NavigationListItem>
                        <Link to={ROUTES.SIGN_UP} style={{fontWeight: "bold"}}>Registrar
                        </Link>
                    </NavigationListItem>
                    <NavigationListItem>
                        <Link to={ROUTES.SIGN_IN}>
                            <Button type="button" color="#4CAF50" variant="solid">
                                Entrar
                            </Button>
                        </Link>
                    </NavigationListItem>
                </NavigationList>
            </NavigationItems>
        </NavigationBar>
    );
}

export default NavigationNonAuth;