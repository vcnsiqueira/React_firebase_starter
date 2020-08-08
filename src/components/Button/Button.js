import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styled/Button.styled.js';

const Button = ({ type, variant, color, onClick, children }) => {
    return(
        <StyledButton type={type} variant={variant} color={color} onClick={onClick}>
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    variant: 'solid',
    type: 'button',
};

Button.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;