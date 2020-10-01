import styled from 'styled-components';

const defaultColor = '#3F51B5';
const hoverColor = '#002984';

export const StyledButton = styled.button`
    background-color: ${(props) => props.variant !== 'outlined'  ? props.color ? props.color : defaultColor : '#FFFFFF'};
    border: 1px solid ${defaultColor};
    color: ${(props) => props.variant !== 'outlined' ? '#FFFFFF' : props.color ? props.color : defaultColor};
    border-radius: 3px;
    padding: 0.6rem 1rem;
    margin: 0.5rem;
    font-weight: bold;
    min-width: 80px;
    cursor: pointer;
    &:hover {
        background-color: ${hoverColor};
        color: #FFFFFF;
        border: 1px solid ${hoverColor}
    } 
    &:focus {
        outline: none;
    }
`;

export const StyledAddButton = styled.button`
    background-color: ${(props) => props.variant !== 'outlined' ? props.color ? props.color : defaultColor : '#FFFFFF'};
    border: 2px solid ${defaultColor};
    color: ${(props) => props.variant !== 'outlined' ? '#FFFFFF' : props.color ? props.color : defaultColor};
    border-radius: 3px;
    padding: 0.6rem 0.6rem;
    margin: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.variant !== 'outlined' ? props.hoverColor ? props.hoverColor : hoverColor : 'FFFFFF'};
        color: ${(props) => props.variant !== 'outlined' ? '#FFFFFF' : props.color ? props.color : defaultColor};
        border: 1px solid ${(props) => props.variant !== 'outlined' ? props.hoverColor ? props.hoverColor : hoverColor : 'FFFFFF'};
    } 
    &:focus {
        outline: none;
    }
`;

export const StyledAuthButton = styled.button`
    background-color: ${(props) => props.variant !== 'outlined'  ? props.color ? props.color : defaultColor : '#FFFFFF'};
    border: 1px solid ${(props) => props.variant !== 'outlined'  ? props.color ? props.color : defaultColor : '#FFFFFF'};
    color: ${(props) => props.variant !== 'outlined' ? '#FFFFFF' : props.color ? props.color : defaultColor};
    border-radius: 3px;
    padding: 0.6rem 1rem;
    margin: 0.5rem 0 0 0;
    font-weight: bold;
    min-width: 80px;
    cursor: pointer;
    &:hover {
        background-color: ${hoverColor};
        color: #FFFFFF;
        border: 1px solid ${hoverColor};
    } 
    &:focus {
        outline: none;
    }
`;

export const StyledCloseXButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    color: #FFFFFF;
    border: transparent;
    background-color: inherit;
    font-weight: bold;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`;