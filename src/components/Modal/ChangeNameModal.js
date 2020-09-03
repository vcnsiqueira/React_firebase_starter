import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from '../Firebase';

import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalFormFieldList, ModalFormFieldRow, ModalFooter } from './styled/Modal.styled';

import Button from '../Button/Button';
import ButtonCloseX from '../Button/ButtonCloseX';
import Label from '../Label/Label';
import Input from '../Input/Input';
import DialogModal from './DialogModal';
import Loader from '../Loader';

const ChangeNameModal = ({ actualName, children, closeChangeNameModal, closeProfile,  firebase }) => {

    const [fullName, setFullName] = useState(actualName);
    const [message, setMessage] = useState('');
    const [resultChanging, setResultChanging] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleBackground = event => { // Função para fechar o modal ao clicar fora
        if (!event.target.closest('.modal-wrapper')) {
            closeChangeNameModal();
        };
    };

    const closeDialog = event => {
        setShowDialog(false);
        closeChangeNameModal();
        closeProfile();
    };

    const changeName = () => {
        setIsLoading(true);
        firebase.db.collection('users')
            .doc(firebase.auth.currentUser.uid)
            .set({
                name: fullName,
            },
            { merge: true },
            )
            .then(() => {
                setResultChanging('success');
                setMessage('Nome do usuário trocado com sucesso!');
                setShowDialog(true);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error.message);
                setResultChanging('failure');
                setMessage('Houve algum problema na execução da sua requisição');
                setShowDialog(true);
                setIsLoading(false);
            });
    };

    return(
        <Fragment>
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
                        <Button onClick={changeName}>Alterar Nome</Button>
                    </ModalFooter>
                </ModalWrapper>
            </Modal>
            { isLoading ?
                <Loader /> :
                showDialog && (
                <DialogModal type={resultChanging} closeDialog={closeDialog}>{message}</DialogModal>
            )}
        </Fragment>
    );

};

ChangeNameModal.propTypes = {
    actualName: PropTypes.string,
    children: PropTypes.node.isRequired,
    closeChangeNameModal: PropTypes.func,
    closeProfile: PropTypes.func,
};

export default withFirebase(ChangeNameModal);