import styled from 'styled-components';

const defaultColor = '#3F51B5';
const defaultBackColor = '#E8EAF6'

export const StyledBadge = styled.span`
    background-color: ${(props) => props.type === 'success' ? '#CCFF90' : props.type === 'failure' ? '#FFEBEE' : defaultBackColor};
    border: 2px solid ${(props) => props.type === 'success' ? 'green' : props.type === 'failure' ? 'red' : defaultColor};
    color: ${(props) => props.type === 'success' ? 'green' : props.type === 'failure' ? 'red' : defaultColor};
    border-radius: 4px;
    padding: 3px 5px;
    font-weight: bold;
`;