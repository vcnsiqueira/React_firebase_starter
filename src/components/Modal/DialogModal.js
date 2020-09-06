import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalWrapper, ModalBody, ModalFooter } from './styled/Modal.styled';

import Button from '../Button/Button';

const DialogModal = ({ type, children, confirmFunction, closeDialog }) => {
    
    /*const handleBackground = event => { // Função para fechar o modal ao clicar fora
        if (!event.target.closest('.modal-wrapper')) {
            closeDialog();
        };
    };*/
    
    let iconColor = '';
    let iconElement = '';
    if(type === 'success') {
        iconColor = "#4CAF50";
        iconElement = "check-circle";
    } else if (type === 'failure') {
        iconColor = "#F44336";
        iconElement = "times-circle";
    } else if (type === 'alert') {
        iconColor = "#FFEB3B";
        iconElement = "exclamation-circle";
    }

    return(
        <Modal>
            <ModalWrapper className="modal-wrapper">
                <ModalBody style={{textAlign: "center"}}>
                    {/*{type === 'success' ?
                        <div style={{margin: "20px auto 20px"}}><i style={{color: "green"}} className="fas fa-check-circle fa-8x"/></div> :
                      type === 'failure' ?
                        <div style={{margin: "20px auto 20px"}}><i style={{color: "red"}} className="fas fa-times-circle fa-8x"/></div> :
                      type === 'alert' ?
                        <div style={{margin: "20px auto 20px"}}><i style={{color: "yellow"}} className="fas fa-exclamation-circle fa-8x"/></div> :
                        null
                    }*/}
                    <div style={{margin: "20px auto 20px"}}><i style={{color:iconColor}} className={`fas fa-${iconElement} fa-5x`}/></div>
                    {children}
                </ModalBody>
                <ModalFooter>
                    { type !== 'alert' ?
                        <Button onClick={closeDialog}>Ok</Button> :
                        <Fragment>
                            <Button onClick={closeDialog}>Cancelar</Button>
                            <Button onClick={confirmFunction}>Confirmar</Button>
                        </Fragment>
                    }
                </ModalFooter>
            </ModalWrapper>
        </Modal>
    );
}

DialogModal.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    confirmFunction: PropTypes.func,
    closeDialog: PropTypes.func,
};

export default DialogModal;