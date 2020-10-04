import React from 'react';
import PropTypes from 'prop-types';

import { StyledIconButton } from './styled/Button.styled';

const ButtonIcon = ({ variant, color, hoverColor, onClick, children }) => {
    return(
        <StyledIconButton variant={variant} color={color} hoverColor={hoverColor} onClick={onClick}>
            {children}
        </StyledIconButton>
    );
}

ButtonIcon.defaultProps = {
    variant: 'solid',
    type: 'button',
};

ButtonIcon.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default ButtonIcon;