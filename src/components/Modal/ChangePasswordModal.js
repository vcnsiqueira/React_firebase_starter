import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalFormFieldList, ModalFormFieldRow, ModalFooter } from './styled/Modal.styled';

import Button from '../Button/Button';
import ButtonCloseX from '../Button/ButtonCloseX';
import Label from '../Label/Label';
import Input from '../Input/Input';

const ChangePasswordModal = ({ children, closeChangePasswordModal }) => {

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
  
    /*const handleBackground = event => { // Função para fechar o modal ao clicar fora
        if (!event.target.closest('.modal-wrapper')) {
            closeChangePasswordModal();
        };
    };*/

    return(
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
                                    type="password"
                                    name="password" 
                                    value={password} 
                                    onChange={event => setPassword(event.target.value)} 
                                    placeholder="Digite o password atual"
                                />
                            </div>
                        </ModalFormFieldRow>
                        <ModalFormFieldRow>
                            <div className="flex2">
                                <Label display="inline">Nova senha:</Label>
                            </div>
                            <div className="flex3">
                                <Input  
                                    type="password"
                                    name="newPassword" 
                                    value={newPassword} 
                                    onChange={event => setNewPassword(event.target.value)} 
                                    placeholder="Digite o novo password"
                                />
                            </div>
                        </ModalFormFieldRow>
                        <ModalFormFieldRow>
                            <div className="flex2">
                                <Label display="inline">Confirme a senha:</Label>
                            </div>
                            <div className="flex3">
                                <Input  
                                    type="password"
                                    name="confirmNewPassword" 
                                    value={confirmNewPassword} 
                                    onChange={event => setConfirmNewPassword(event.target.value)} 
                                    placeholder="Confirme o novo password"
                                />
                            </div>
                        </ModalFormFieldRow>
                    </ModalFormFieldList>
                </ModalBody>
                <ModalFooter>
                    <Button>Salvar nova senha</Button>
                </ModalFooter>
            </ModalWrapper>
        </Modal>
    );

};

ChangePasswordModal.propTypes = {
    children: PropTypes.node.isRequired,
    closeChangePasswordModal: PropTypes.func,
};

export default ChangePasswordModal;