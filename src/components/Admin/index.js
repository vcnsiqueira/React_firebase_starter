import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';

const Admin = () => {
    return(
        <AuthUserContext.Consumer>
            {authUser => (
                <div>
                    <h1>Admin Page: {authUser.email}</h1>
                    <p>Esta é a página administrativa</p>
                </div>
            )}
        </AuthUserContext.Consumer>
    );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Admin);