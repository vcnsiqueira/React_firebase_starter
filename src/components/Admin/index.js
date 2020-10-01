import React, { useState, useEffect } from 'react';

import { withFirebase } from '../Firebase';

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
                console.log(docs);
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

const UserList = ({ users }) => {
    return(
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <span>
                        <strong>Id:</strong> {user.id}
                    </span>
                    <span>
                        <strong>E-mail:</strong> {user.email}
                    </span>
                    <span>
                        <strong>Name:</strong> {user.name}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default withFirebase(Admin);