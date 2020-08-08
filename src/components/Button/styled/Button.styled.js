import styled from 'styled-components';

const defaultColor = '#3F51B5';
const hoverColor = '#002984';

export const StyledButton = styled.button`
    background-color: ${(props) => props.variant !== 'outlined'  ? props.color ? props.color : defaultColor : '#FFFFFF'};
    border: 1px solid ${defaultColor};
    color: ${(props) => props.variant !== 'outlined' ? '#FFFFFF' : props.color ? props.color : defaultColor};
    border-radius: 3px;
    padding: 0.6rem 1rem;
    margin: 0.3rem;
    font-weight: bold;
    &:hover {
        background-color: ${hoverColor};
        color: #FFFFFF;
    } 
    &:focus {
        outline: none;
    }
`;

export const StyledAuthButton = styled.button`
    background-color: ${(props) => props.variant !== 'outlined'  ? props.color ? props.color : defaultColor : '#FFFFFF'};
    border: 1px solid ${defaultColor};
    color: ${(props) => props.variant !== 'outlined' ? '#FFFFFF' : props.color ? props.color : defaultColor};
    border-radius: 3px;
    padding: 0.6rem 1rem;
    margin: 1.2rem 0.3rem 0 0;
    font-weight: bold;
    &:hover {
        background-color: ${hoverColor};
        color: #FFFFFF;
    } 
    &:focus {
        outline: none;
    }
`;