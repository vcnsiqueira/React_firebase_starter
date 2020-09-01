import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationBar, NavigationBrand, NavigationLogo, NavigationItems, NavigationList, NavigationListItem } from './styled/Navigation.styled';

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

import ProfileModal from '../Modal/ProfileModal';
import DialogModal from '../Modal/DialogModal';

const NavigationAuth = (props) => {

    const [showProfile, setShowProfile] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const openProfile = event => {
        setShowProfile(true);
    }

    const closeProfile = () => {
        setShowProfile(false);
    }

    const openDialog = event => {
        setShowDialog(true);
    }

    const closeDialog = event => {
        setShowDialog(false);
    }

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
                                    <div onClick={openDialog}>
                                        <span href="#" type="button">
                                            <i className="fas fa-sign-out-alt"/>Sair
                                        </span>
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
            { showDialog ?
                <DialogModal type="alert" confirmFunction={signOut} closeDialog={closeDialog}>Tem certeza que deseja sair?</DialogModal>
                : null
            }
        </Fragment>
    );
};

export default compose(
    withRouter,
    withFirebase,
)(NavigationAuth);