import styled from 'styled-components';

const backgroundColor = '#3F51B5';

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: block;
`;

export const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    height: auto;
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
    margin: auto;
    transition: all .8s;
    transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
    background: ${backgroundColor};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 40px;
    line-height: 40px;
    padding: 5px 20px;
    text-align: center;

    h3 {
        color: #FFF;
        float: center;
        margin: 0;
        padding: 0;
    }
`;

export const ModalBody = styled.div`
    padding: 10px 15px;
    text-align: left;
`;

export const ModalFormFieldList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const ModalFormFieldRow = styled.li`
    display: flex;
    justify-content: ${props => props.alignment ? props.alignment: 'space-between'};
    align-items: center;
    padding-bottom: 0.5rem;
    width: 100%;

    div .flex1 {
        flex: 1;
    }

    div .flex2 {
        flex: 2;
    }

    div .flex3 {
        flex: 3;
    }

    div .flex4 {
        flex: 4;
    }

    label {
        margin-right: 10px;
    }
`;

export const ModalFooter = styled.div`
    height: 35px;
    padding-bottom: 15px;
    text-align: center;
`;

export const ModalUserImage = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    margin: auto;
    border-radius: 75px;
    background-color: #CCCCCC;
    
    i {
        position: absolute;
        bottom: 5px;
        left: 68px;
    }
`;