import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styled/Input.styled';

const Input = ({ type, name, value, onChange, placeholder, required, className, disabled }) => {
    return(
        <StyledInput 
            className={className}
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
            required={required}
            disabled={disabled}
        />
    );
}

Input.defaultProps = {
    required: false,
    type: 'text',
    disabled: false,
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Input;