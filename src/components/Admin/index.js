import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as ROLES from '../../constants/roles';

import Loader from '../Loader';
import UserListTable from '../UserListTable';

const Admin = ({ firebase }) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    
    const getUsers = () => {
        const usersCollection = firebase.db.collection('users')
        usersCollection.get().then(snapshot => {
                const docs = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id, 
                }))
                //console.log(docs);
                setUsers(docs);
                setIsLoading(false);
        }).catch(error => {
            console.error(error);
        });
    };
    
    useEffect(() => {
        getUsers();
    },[])

    if (isLoading) {
        return <Loader />
    } else { 
        return(
            <div>
                <h1>Admin Page</h1>
                <UserListTable users={users}/>
            </div>
        );
    }
};

const condition = authUser =>
    authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
    withAuthorization(condition),
    withFirebase,
)(Admin);