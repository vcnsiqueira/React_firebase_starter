import React from 'react';
import PropTypes from 'prop-types';
import { HiddenCheckbox, StyledCheckbox, CheckboxContainer, Icon } from './styled/Checkbox.styled';

const Checkbox = ({ checked, onChange, className }) => {
    return(
        <CheckboxContainer className={className}>
            <HiddenCheckbox checked={checked} onChange={onChange} />
            <StyledCheckbox checked={checked} onChange={onChange}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
}

export default Checkbox;