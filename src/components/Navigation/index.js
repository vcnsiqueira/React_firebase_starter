import React from 'react';
import { AuthUserContext } from '../Session';

import NavigationAuth from './NavigationAuth';
import NavigationNonAuth from './NavigationNonAuth';

const Navigation = () => {
    return(
        <div>
            <AuthUserContext.Consumer>
                {authUser => 
                    authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth />
                }
            </AuthUserContext.Consumer>
        </div>
   );
};

export default Navigation;