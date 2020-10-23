import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationBar, NavigationBrand, NavigationLogo, NavigationItems, NavigationList, NavigationListItem } from './styled/Navigation.styled';

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import ProfileModal from '../Modal/ProfileModal';
import DialogModal from '../Modal/DialogModal';
import Loader from '../Loader';

const NavigationAuth = ({ firebase, authUser, history }) => {

    const [showProfile, setShowProfile] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showDialogErrorLogOut, setShowDialogErrorLogOut] = useState(false);
    const [messageErrorLogOut, setMessageErrorLogOut] = useState('');

    const openProfile = event => {
        setShowProfile(true);
    };

    const closeProfile = () => {
        setShowProfile(false);
    };

    const openDialog = event => {
        setShowDialog(true);
    };

    const closeDialog = event => {
        setShowDialog(false);
    };

    const closeErrorLogOutDialog = event => {
        setShowDialogErrorLogOut(false);
    }

    const signOut = () => {
        setIsLoading(true);
        firebase.doSignOut()
            .then(() => {
                console.log('Usuário desconectado com sucesso!');
                setIsLoading(false);
                history.push(ROUTES.LANDING);
            })
            .catch(error => {
                console.error(error.message);
                setShowDialogErrorLogOut(true);
                setMessageErrorLogOut('Houve algum problema ao tentar desconectar!');
                setIsLoading(false);
            });
    };

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
                        {!!authUser.roles[ROLES.ADMIN] && (
                            <NavigationListItem>
                                <Link to={ROUTES.ADMIN}>Admin</Link>
                            </NavigationListItem>
                        )}
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
            { isLoading ? 
                <Loader/> :
                showDialogErrorLogOut && (
                    <DialogModal type="failure" closeErrorLogoutDialog={closeErrorLogOutDialog}>{messageErrorLogOut}</DialogModal>
                )
            }
            { showProfile && ( 
                <ProfileModal show={showProfile} closeProfile={closeProfile}>Perfil</ProfileModal>)
            }
            { showDialog && (
                <DialogModal type="alert" confirmFunction={signOut} closeDialog={closeDialog}>Tem certeza que deseja sair?</DialogModal>)
            }
        </Fragment>
    );
};

export default compose(
    withRouter,
    withFirebase,
)(NavigationAuth);