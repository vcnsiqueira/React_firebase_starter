import React from 'react';
import PropTypes from 'prop-types';

import { StyledAuthButton } from './styled/Button.styled.js';

const ButtonAuth = ({ type, variant, color, onClick, children }) => {
    return(
        <StyledAuthButton type={type} variant={variant} color={color} onClick={onClick}>
            {children}
        </StyledAuthButton>
    );
}

ButtonAuth.defaultProps = {
    variant: 'solid',
    type: 'button',
};

ButtonAuth.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default ButtonAuth;