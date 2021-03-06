import styled from 'styled-components';

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

export const StyledCheckbox = styled.div`
    display: inline-block;
    margin-right: 8px;
    width: 16px;
    height: 16px;
    background: ${props => props.checked ? '#3F51B5' : '#E8EAF6'};
    border-radius: 3px;
    transition: all 150ms;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px #C5CAE9;
    }

    ${Icon} {
        visibility: ${props => props.checked ? 'visible' : 'hidden'};
    }
`;

export const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

