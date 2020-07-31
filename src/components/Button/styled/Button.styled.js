import styled from 'styled-components';

const color = '#3F51B5';
const hoverColor = '#002984';

export const StyledButton = styled.button`
    background-color: ${(props) => props.variant !== 'outlined'  ? color : '#FFFFFF'};
    border: 1px solid ${color};
    color: ${(props) => props.variant !== 'outlined' ? '#FFFFFF' : color};
    border-radius: 3px;
    padding: 0.5rem;
    margin: 0.3rem;
    font-weight: bold;
    &:hover {
        background-color: ${hoverColor};
        color: #FFFFFF;
    }  
`