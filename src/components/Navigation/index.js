import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationBar, NavigationBrand, NavigationLogo, NavigationItems, NavigationList, NavigationListItem } from './styled/Navigation.styled';
import { AuthUserContext } from '../Session';

import * as ROUTES from '../../constants/routes';

import SignOut from '../SignOut';
import Button from '../Button/Button';

const Navigation = () => {
    return(
        <div>
            <AuthUserContext.Consumer>
                {authUser => 
                    authUser ? <NavigationAuth /> : <NavigationNonAuth />
                }
            </AuthUserContext.Consumer>
        </div>
   );
}

const NavigationAuth = () => {
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
                        <Link to={ROUTES.HOME}>Home</Link>
                    </NavigationListItem>
                    <NavigationListItem>
                        <Link to={ROUTES.ADMIN}>Admin</Link>
                    </NavigationListItem>
                    <NavigationListItem>
                        <div className="dropdown">
                            <i className="fas fa-user-circle fa-2x dropdown-title"/>
                            <div class="dropdown-content">
                                <Link to={ROUTES.ACCOUNT}>Perfil</Link>
                                <SignOut/>
                            </div>
                        </div>
                    </NavigationListItem>
                </NavigationList>
            </NavigationItems>
        </NavigationBar>
    );
}

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
                        <Link to={ROUTES.SIGN_UP}>
                            <Button type="button" color="#e53935" variant="solid">
                                Registrar
                            </Button>
                        </Link>
                    </NavigationListItem>
                    <NavigationListItem>
                        <Link to={ROUTES.SIGN_IN}>
                            <Button type="button" color="#e53935" variant="solid">
                                Entrar
                            </Button>
                        </Link>
                    </NavigationListItem>
                </NavigationList>
            </NavigationItems>
        </NavigationBar>
    );
}

/*const NavigationAuth = () => {
    return(
        <nav>
            <NavigationList>
                <NavigationListItem>
                    Marca
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
                <NavigationListItem className="dropdown">
                    <i className="fas fa-user-circle fa-2x"></i>
                </NavigationListItem>
            </NavigationList>
        </nav>
    );
};

const NavigationNonAuth = () => {
    return(
        <nav>
            <NavigationList>
                <NavigationListItem>
                    Marca
                </NavigationListItem>
                <NavigationListItem>
                    <Link to={ROUTES.SIGN_UP} style={{textDecoration: 'none', color: 'white'}}>
                        <Button type="button" color="#e53935" variant="solid">
                            Registrar
                        </Button>
                    </Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to={ROUTES.SIGN_IN} style={{textDecoration: 'none', color: 'white'}}>
                        <Button type="button" color="#e53935" variant="solid">
                            Entrar
                        </Button>
                    </Link>
                </NavigationListItem>
            </NavigationList>
        </nav>
    );
}*/

export default Navigation;