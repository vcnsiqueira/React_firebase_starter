import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalFormFieldList, ModalFormFieldRow, ModalFooter } from './styled/Modal.styled';

import Button from '../Button/Button';
import ButtonCloseX from '../Button/ButtonCloseX';
import Label from '../Label/Label';
import Input from '../Input/Input';

const ChangeNameModal = ({ children, closeChangeNameModal }) => {

    const [fullName, setFullName] = useState('Vinícius Siqueira');
  
    const handleBackground = event => { // Função para fechar o modal ao clicar fora
        if (!event.target.closest('.modal-wrapper')) {
            closeChangeNameModal();
        };
    };

    return(
        <Modal onClick={handleBackground}>
            <ModalWrapper className="modal-wrapper">
                <ModalHeader>
                    <h3>{children}</h3>
                    <ButtonCloseX onClick={closeChangeNameModal}><i className="fas fa-times"/></ButtonCloseX>
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
                                    placeholder="Digite o novo nome"
                                />
                            </div>
                        </ModalFormFieldRow>
                    </ModalFormFieldList>
                </ModalBody>
                <ModalFooter>
                    <Button>Alterar Nome</Button>
                </ModalFooter>
            </ModalWrapper>
        </Modal>
    );

};

ChangeNameModal.propTypes = {
    children: PropTypes.node.isRequired,
    closeChangeNameModal: PropTypes.func,
};

export default ChangeNameModal;