import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './styled/Label.styled';

const Label = ({ children, display='block' }) => {
    return(
        <StyledLabel display={display}>
            {children}
        </StyledLabel>
    );
};

Label.propTypes = {
    children: PropTypes.node.isRequired,
    display: PropTypes.string,
    width: PropTypes.string,
};

export default Label;