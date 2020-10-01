import React from 'react';
import PropTypes from 'prop-types'

import { StyledBadge } from './styled/Badge.styled';

const Badge = ({ type, children }) => {
    return(
        <StyledBadge type={type}>{children}</StyledBadge>
    );
};

Badge.defaultProps = {
    type: 'success',
};

Badge.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Badge;