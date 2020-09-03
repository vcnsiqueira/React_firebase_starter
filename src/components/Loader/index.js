import React from 'react';

import { BackgroundLoader, StyledLoader } from './styled/Loader.styled';

const Loader = () => {
    return(
        <BackgroundLoader>
            <StyledLoader />
        </BackgroundLoader>
    )
}

export default Loader;