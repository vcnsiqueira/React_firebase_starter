import React from 'react';
import PropTypes from 'prop-types';

import { StyledSearch } from './styled/Search.styled';

const Search = ( {value, onChange} ) => 
    <StyledSearch type="text" value={value} onChange={onChange} placeholder="Buscar"/>

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default Search;