import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationBar, NavigationBrand, NavigationLogo, NavigationItems, NavigationList, NavigationListItem } from './styled/Navigation.styled';

import * as ROUTES from '../../constants/routes';

import SignOut from '../SignOut';
import ProfileModal from '../Modal/ProfileModal';

const NavigationAuth = () => {

    const [showProfile, setShowProfile] = useState(false);

    const openProfile = event => {
        setShowProfile(true);
    }

    const closeProfile = () => {
        setShowProfile(false);
    }

    return(
        <Fragment>
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
                                <div className="dropdown-content">
                                    <div onClick={openProfile}>
                                        <a href="#"><i className="fas fa-id-badge"/>Perfil</a>
                                    </div>
                                    <div>
                                        <SignOut/>
                                    </div>
                                </div>
                            </div>
                        </NavigationListItem>
                    </NavigationList>
                </NavigationItems>
            </NavigationBar>
            { showProfile ? 
                <ProfileModal show={showProfile} closeProfile={closeProfile}>Perfil</ProfileModal> 
                : null 
            }
        </Fragment>
    );
};

export default NavigationAuth;