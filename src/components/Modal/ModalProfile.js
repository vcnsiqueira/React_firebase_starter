import React, { Fragment, useState } from 'react';
//import './Modal.css';
import PropTypes from 'prop-types';
import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalFormFieldList, ModalFormFieldRow, ModalFooter } from './styled/Modal.styled';

import Button from '../Button/Button';
import Input from '../Input/Input';
import Label from '../Label/Label';
import PasswordChangeLink from '../PasswordChange/PasswordChangeLink';

const ModalProfile = ({ closeProfile, children }) => {

    const [initialFullName, setInitialFullName] = useState('Vinícius Siqueira');
    const [fullName, setFullName] = useState(initialFullName);
    const [email, setEmail] = useState('vcnsiqueira@gmail.com');
    const [isDisabledInput, setIsDisabledInput] = useState(true)
    const [showPasswordChange, setShowPasswordChange] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleBackground = event => { // Função para fechar o modal ao clicar fora
        if (!event.target.closest('.modal-wrapper')) {
            closeProfile();
        };
    };

    const toggleEnable = event => {
        setIsDisabledInput(!isDisabledInput);
    };

    const enablePasswordChange = event => {
        setShowPasswordChange(true);
    };

    return(
        <Modal onClick={handleBackground}>
            <ModalWrapper className="modal-wrapper">
                <ModalHeader>
                    <h3>{children}</h3>
                </ModalHeader>
                <ModalBody>
                    <ModalFormFieldList>
                        <ModalFormFieldRow>
                            <div className="flex2">
                                <Label display="inline">Nome:</Label>
                            </div>
                            <div className="flex3">
                                <Input  
                                    name="name" 
                                    value={fullName} 
                                    onChange={event => setFullName(event.target.value)} 
                                    placeholder={initialFullName} 
                                    disabled={isDisabledInput}
                                />
                            </div>
                            <div style={{color: "#e53935", marginLeft: '10px'}} className="fa-stack fa-1x flex1" onClick={toggleEnable}>
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-pen fa-stack-1x fa-inverse"></i>
                            </div>
                        </ModalFormFieldRow>
                        <ModalFormFieldRow alignment="flex-start">
                            <div className="flex2">
                                <Label display="inline">E-mail:</Label>
                            </div>
                            <div className="flex4">
                                <span style={{ color: '#495057' }}>{email}</span>
                            </div>
                        </ModalFormFieldRow>
                    </ModalFormFieldList>
                    <hr/>
                    { showPasswordChange ? null :
                        <div>
                            Caso deseje trocar a senha, <PasswordChangeLink onClick={enablePasswordChange}>clique aqui!</PasswordChangeLink>
                        </div>
                    }
                    { !showPasswordChange ? null :
                        <div>
                            <ModalFormFieldList>
                                <ModalFormFieldRow>
                                    <div className="flex2">
                                        <Label>Nova senha:</Label>
                                    </div>
                                    <div className="flex3">
                                        <Input 
                                            type="password"
                                            name="newPassword"
                                            value={newPassword}
                                            onChange={event => setNewPassword(event.target.value)}
                                            placeholder={"Insira a nova senha"}
                                        />
                                    </div>
                                </ModalFormFieldRow>
                                <ModalFormFieldRow>
                                    <div className="flex2">
                                        <Label>Confirme:</Label>
                                    </div>
                                    <div className="flex3">
                                        <Input
                                            type="password"
                                            name="confirmNewPassword"
                                            value={confirmNewPassword}
                                            onChange={event => setConfirmNewPassword(event.target.value)}
                                            placeholder={"Confirme a nova senha"}
                                        />
                                    </div>
                                </ModalFormFieldRow>
                            </ModalFormFieldList>
                        </div>          
                    }
                </ModalBody>
                <ModalFooter>
                    {JSON.stringify(showPasswordChange)}
                    {/*Incluir o Footer*/}
                </ModalFooter>
            </ModalWrapper>
        </Modal>
    );
}

export default ModalProfile