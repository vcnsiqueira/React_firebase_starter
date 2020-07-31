import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './styled/Label.styled';

const Label = ({ children }) => {
    return(
        <StyledLabel>
            {children}
        </StyledLabel>
    );
};

Label.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Label;