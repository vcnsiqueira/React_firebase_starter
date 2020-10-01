import React from 'react';
import PropTypes from 'prop-types';

import { StyledAddButton } from './styled/Button.styled';

const ButtonAdd = ({ variant, color, hoverColor, onClick, children }) => {
    return(
        <StyledAddButton variant={variant} color={color} hoverColor={hoverColor} onClick={onClick}>
            {children}
        </StyledAddButton>
    );
}

ButtonAdd.defaultProps = {
    variant: 'solid',
    type: 'button',
};

ButtonAdd.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default ButtonAdd;