import React, { Fragment, useState, useEffect } from 'react';
//import './Modal.css';
import PropTypes from 'prop-types';
import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalUserImage, ModalFooter } from './styled/Modal.styled';

import { withFirebase } from '../Firebase';

import Button from '../Button/Button';
import ButtonCloseX from '../Button/ButtonCloseX';
import ChangeNameModal from './ChangeNameModal';
import ChangePasswordModal from './ChangePasswordModal';

const ProfileModal = ({ closeProfile, children, firebase }) => {

    /*const dados = firebase.db.collection('users').doc(firebase.auth().currentUser.uid).get()
        .then(doc => {
            if(doc.exists) {
                console.log(doc.data());
            } else {
                console.log('não encontrou!');
            }
        }).catch(error => {
            console.log(error);
        })*/
    
    /*const user = firebase.auth.currentUser.uid;
    const dados = firebase.db.collection('users').doc(user);
    dados.get().then(doc => {
        if(doc.exists) {
            const username  = doc.data().name;
            console.log(username);
        }else {
            console.log('Erro')
        }
    }).catch(error => {
        console.log(error);
    });*/

    const getName = () => {
        firebase.db.collection('users')
            .doc(firebase.auth.currentUser.uid)
            .get().then(doc => {
                if(doc.exists) {
                    const newName = doc.data().name
                    setName(newName);
                    console.log(newName);
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

    const [name, setName] = useState('');    
    const email = 'vcnsiqueira@gmail.com';
    const [showChangeName, setShowChangeName] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);

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
                    <ChangeNameModal closeChangeNameModal={closeChangeNameModal}>Trocar o Nome</ChangeNameModal>
            }
            {
                !showChangePassword ? null :
                    <ChangePasswordModal closeChangePasswordModal={closeChangePasswordModal}>Trocar a Senha</ChangePasswordModal>
            }
        </Fragment>
    );
}

ProfileModal.propTypes = {
    children: PropTypes.node.isRequired,
    closeProfile: PropTypes.func,
};


export default withFirebase(ProfileModal);