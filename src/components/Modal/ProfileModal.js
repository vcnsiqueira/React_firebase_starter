import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { withAuthorization } from '../Session';
import { compose } from 'recompose';
import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalUserImage, ModalFooter } from './styled/Modal.styled';

import { withFirebase } from '../Firebase';

import Button from '../Button/Button';
import ButtonCloseX from '../Button/ButtonCloseX';
import ChangeNameModal from './ChangeNameModal';
import ChangePasswordModal from './ChangePasswordModal';
//import DialogModal from './DialogModal';
import Loader from '../Loader';

const ProfileModal = ({ closeProfile, children, firebase }) => {

    const [name, setName] = useState('');    
    const [email, setEmail] = useState('');
    const [showChangeName, setShowChangeName] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    const getName = () => {
        firebase.db.collection('users')
            .doc(firebase.auth.currentUser.uid)
            .get().then(doc => {
                if(doc.exists) {
                    setName(doc.data().name);
                    setEmail(doc.data().email);
                    setIsLoading(false);
                }else {
                    console.log('Erro')
                }
            }).catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getName();
    }, []);

    const openChangeNameModal = event => {
        setShowChangeName(true);
    }

    const closeChangeNameModal = event => {
        setShowChangeName(false);
    }

    const openChangePasswordModal = event => {
        setShowChangePassword(true);
    }

    const closeChangePasswordModal = event => {
        setShowChangePassword(false);
    }

    if(isLoading) {
        return <Loader />;
    } else {
        return(
            <Fragment>
                <Modal>
                    <ModalWrapper className="modal-wrapper">
                        <ModalHeader>
                            <h3>{children}</h3>
                            <ButtonCloseX onClick={closeProfile}><i className="fas fa-times"/></ButtonCloseX>
                        </ModalHeader>
                        <ModalBody>
                            { name !== '' &&
                                <h2 style={{textAlign: 'center'}}>Olá {name}!</h2>
                            }
                            <ModalUserImage><i className="fas fa-camera"/></ModalUserImage>
                            <p style={{fontSize:'14px', textAlign:'center'}}>{email}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={openChangeNameModal}>Alterar o nome</Button>
                            <Button onClick={openChangePasswordModal}>Alterar a senha</Button>
                        </ModalFooter>
                    </ModalWrapper>
                </Modal>
                { 
                    !showChangeName ? null :
                        <ChangeNameModal actualName={name} closeChangeNameModal={closeChangeNameModal} closeProfile={closeProfile}>Alterar o Nome</ChangeNameModal>
                }
                {
                    !showChangePassword ? null :
                        <ChangePasswordModal closeChangePasswordModal={closeChangePasswordModal} closeProfile={closeProfile}>Alterar a Senha</ChangePasswordModal>
                }
            </Fragment>
        );
    }
}

const condition = authUser => !!authUser;

ProfileModal.propTypes = {
    children: PropTypes.node.isRequired,
    closeProfile: PropTypes.func,
};


export default compose(
    withAuthorization(condition), 
    withFirebase,
)(ProfileModal);