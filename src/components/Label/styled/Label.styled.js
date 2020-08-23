import styled from 'styled-components';

export const StyledLabel = styled.label`
    display: ${props => props.type === 'block' ? 'block' : 'inline'};
    color: #000;
    font-weight: bold;
    padding-right: 10px;
    margin: 10px;
    text-align: left;
    width: '100%';
    vertical-align: middle;
`;