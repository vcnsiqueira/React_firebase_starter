import React, { Fragment, useState, useEffect } from 'react';
//import './Modal.css';
import PropTypes from 'prop-types';
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
    const [isLoading, setIsLoading] = useState(false);
    
    const getName = () => {
        firebase.db.collection('users')
            .doc(firebase.auth.currentUser.uid)
            .get().then(doc => {
                if(doc.exists) {
                    setName(doc.data().name);
                    setEmail(doc.data().email);
                    setIsLoading(true);
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

    const handleBackground = event => { // Função para fechar o modal ao clicar fora
        if (!event.target.closest('.modal-wrapper')) {
            closeProfile();
        };
    };

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

    if(!isLoading) {
        return <Loader />;
    } else {
        return(
            <Fragment>
                <Modal onClick={handleBackground}>
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
                            <Button onClick={openChangeNameModal}>Trocar o nome</Button>
                            <Button onClick={openChangePasswordModal}>Trocar a senha</Button>
                        </ModalFooter>
                    </ModalWrapper>
                </Modal>
                { 
                    !showChangeName ? null :
                        <ChangeNameModal actualName={name} closeChangeNameModal={closeChangeNameModal} closeProfile={closeProfile}>Trocar o Nome</ChangeNameModal>
                }
                {
                    !showChangePassword ? null :
                        <ChangePasswordModal closeChangePasswordModal={closeChangePasswordModal}>Trocar a Senha</ChangePasswordModal>
                }
            </Fragment>
        );
    }
}

ProfileModal.propTypes = {
    children: PropTypes.node.isRequired,
    closeProfile: PropTypes.func,
};


export default withFirebase(ProfileModal);