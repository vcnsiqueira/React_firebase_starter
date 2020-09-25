import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from '../Firebase';

import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalFormFieldList, ModalFormFieldRow, ModalFooter } from './styled/Modal.styled';

import Button from '../Button/Button';
import ButtonCloseX from '../Button/ButtonCloseX';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Loader from '../Loader';
import DialogModal from './DialogModal';

const ChangePasswordModal = ({ children, closeChangePasswordModal, closeProfile, firebase }) => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [resultChanging, setResultChanging] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [errors, setErrors] = useState({});
  
    const changePasswordFirebase = event => {
        setIsLoading(true);
        firebase.doPasswordUpdate(newPassword)
            .then(() => {
                setResultChanging('success');
                setMessage('Senha alterada com sucesso');
                setShowDialog(true);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setResultChanging('failure');
                setMessage('Ocorreu algum erro!');
                setShowDialog(true);
                setIsLoading(false);
            });
        setIsLoading(false);
    };

    const closeDialog = event => {
        setShowDialog(false);
        closeChangePasswordModal();
        closeProfile();
    }

    const validatePassword = (currentPassword, newPassword, confirmNewPassword) => {
        let errors = {};

        if(!currentPassword) {
            errors.currentPassword = 'É necessário inserir a senha atual';
        } else if(currentPassword.length < 8) {
            errors.currentPassword = 'A senha deve ter, no mínimo, 8 caracteres';
        }

        if(!newPassword) {
            errors.newPassword = 'É necessário inserir a nova senha';
        } else if(newPassword.length < 8) {
            errors.newPassword = 'A nova senha deve ter, no mínimo, 8 caracteres';
        }

        if(!confirmNewPassword) {
            errors.confirmNewPassword = 'É necessário confirmar a sua senha';
        } else if (confirmNewPassword !== newPassword) {
            errors.confirmNewPassword = 'A senha é diferente da anterior';
        }

        return errors;
    }

    const changePassword = () => {
        let newErrors = validatePassword(currentPassword, newPassword, confirmNewPassword);
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0) {
            changePasswordFirebase();
        };
        console.log(validatePassword(currentPassword, newPassword, confirmNewPassword));
    };

    useEffect(() => {
        if(Object.keys(errors).length !== 0) {
            setErrors(validatePassword(currentPassword, newPassword, confirmNewPassword));
        }
    }, [currentPassword, newPassword, confirmNewPassword]);

    return(
        <Fragment>
            <Modal>
                <ModalWrapper className="modal-wrapper">
                    <ModalHeader>
                        <h3>{children}</h3>
                        <ButtonCloseX onClick={closeChangePasswordModal}><i className="fas fa-times"/></ButtonCloseX>
                    </ModalHeader>
                    <ModalBody>
                        <ModalFormFieldList>
                            <ModalFormFieldRow>
                                <div className="flex2">
                                    <Label display="inline">Senha atual:</Label>
                                </div>
                                <div className="flex3">
                                    <Input
                                        className={`${errors.currentPassword && 'alert'}`}
                                        type="password"
                                        name="password" 
                                        value={currentPassword} 
                                        onChange={event => setCurrentPassword(event.target.value)} 
                                        placeholder="Digite o password atual"
                                    />
                                    { errors.currentPassword && (
                                        <p>{errors.currentPassword}</p>
                                    )}
                                </div>
                            </ModalFormFieldRow>
                            <ModalFormFieldRow>
                                <div className="flex2">
                                    <Label display="inline">Nova senha:</Label>
                                </div>
                                <div className="flex3">
                                    <Input 
                                        className={`${errors.newPassword && 'alert'}`}
                                        type="password"
                                        name="newPassword" 
                                        value={newPassword} 
                                        onChange={event => setNewPassword(event.target.value)} 
                                        placeholder="Digite o novo password"
                                    />
                                    { errors.newPassword && (
                                        <p>{errors.newPassword}</p>
                                    )}
                                </div>
                            </ModalFormFieldRow>
                            <ModalFormFieldRow>
                                <div className="flex2">
                                    <Label display="inline">Confirme a senha:</Label>
                                </div>
                                <div className="flex3">
                                    <Input
                                        className={`${errors.confirmNewPassword && 'alert'}`}
                                        type="password"
                                        name="confirmNewPassword" 
                                        value={confirmNewPassword} 
                                        onChange={event => setConfirmNewPassword(event.target.value)} 
                                        placeholder="Confirme o novo password"
                                    />
                                    { errors.confirmNewPassword && (
                                        <p>{errors.confirmNewPassword}</p>
                                    )}
                                </div>
                            </ModalFormFieldRow>
                        </ModalFormFieldList>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={changePassword}>Alterar senha</Button>
                    </ModalFooter>
                </ModalWrapper>
            </Modal>
            {isLoading ?
                <Loader /> :
                showDialog && (
                <DialogModal type={resultChanging} closeDialog={closeDialog}>{message} </DialogModal>
            )}
        </Fragment>
    );

};

ChangePasswordModal.propTypes = {
    children: PropTypes.node.isRequired,
    closeChangePasswordModal: PropTypes.func,
    closeProfile: PropTypes.func,
};

export default withFirebase(ChangePasswordModal);