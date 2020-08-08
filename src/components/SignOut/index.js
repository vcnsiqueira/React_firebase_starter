import React from 'react';

import { withFirebase } from '../Firebase';

import Button from '../Button/Button';

const SignOut = ({ firebase }) => {
    return(
        <Button type="button" color="#e53935" variant="solid" onClick={firebase.doSignOut}>
            Sign Out
        </Button>
    );
};

export default withFirebase(SignOut);