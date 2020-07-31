import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styled/Button.styled.js';

const Button = ({ variant, color, onClick, children }) => {
    return(
        <StyledButton variant={variant} color={color} onClick={onClick}>
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    variant: 'solid',
    color: '#66BB6A',
};

Button.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;