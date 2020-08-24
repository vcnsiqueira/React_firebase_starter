import React from 'react';
import PropTypes from 'prop-types';

import { StyledCloseXButton } from './styled/Button.styled.js';

const ButtonCloseX = ({ onClick, children }) => {
    return(
        <StyledCloseXButton onClick={onClick}>
            {children}
        </StyledCloseXButton>
    );
}

ButtonCloseX.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default ButtonCloseX;