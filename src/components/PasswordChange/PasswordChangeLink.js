import React from 'react';
import PropTypes from 'prop-types';

import { PasswordChangeLinkStyled } from './styled/PasswordChange.styled';

const PasswordChangeLink = ({ children, onClick }) => {
    return(
        <PasswordChangeLinkStyled onClick={onClick}>
            {children}
        </PasswordChangeLinkStyled>
    );
};

PasswordChangeLink.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default PasswordChangeLink;