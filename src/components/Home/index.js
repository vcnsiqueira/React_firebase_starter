import React from 'react';

import  { withAuthorization } from '../Session';

const Home = () => {
    return(
        <div>
            <h1>Home Page</h1>
            <p>A Home Page é acessível por todos os usuários logados no sistema.</p>
        </div>
    );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);