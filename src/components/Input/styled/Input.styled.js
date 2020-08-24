import styled from 'styled-components';

const color = '#3F51B5';

export const StyledInput = styled.input`
    padding: 0.5rem;
    margin: 0;
    color: #495057;
    border: 1px solid ${(props) => props.className === 'alert' ? '#FF0000' : '#CCCCCC'};
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 400;
    background-color: ${props => props.isDisabledInput ? '#F5F5F5' : '#FFFFFF'};
    width: 95%;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #AAAAAA;
        opacity: 1; /* Firefox */
    }
    &:focus {
        border: 1px solid ${(props) => props.className === 'alert' ?  '#FF0000' :  color};
        box-shadow: 0 0 2px ${(props) => props.className === 'alert' ? '#FF0000' : color};
        outline: none;
    }

`;