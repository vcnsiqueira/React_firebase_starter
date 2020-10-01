import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from './styled/Table.styled.js';
import ButtonAdd from '../Button/ButtonAdd';
import Search from '../Search';
import Badge from '../Badge';

const UserListTable = ( {users} ) => {

    const header = ['Nome', 'E-mail', 'Último Login', 'Busca', 'Opções']
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    return(
        <Table>
            <TableHeader>
                <TableRow>
                    {
                        header.map((item, index) => {
                            if(item !== 'Busca' && item !== 'Opções') {
                                return <TableHeaderCell key={index}>{item}</TableHeaderCell>
                            } else if (item === 'Busca') {
                                return <TableHeaderCell key={index}><Search value={searchTerm} onChange={handleSearch}/></TableHeaderCell>
                            } else{
                                return <TableHeaderCell key={index}><ButtonAdd variant="solid" color={'#FF9800'} hoverColor={'#FB8C00'} onClick={console.log('Hey!')}><icon className='fas fa-plus'/></ButtonAdd></TableHeaderCell>
                            }
                        })
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                    {
                        users.map((user, index) => {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.lastLogin && null}</TableCell>
                                    <TableCell><Badge type='success'>Ativo</Badge></TableCell>
                                    <TableCell><ButtonAdd variant='outlined'><icon className='fas fa-ellipsis-v'/></ButtonAdd></TableCell>
                                </TableRow>
                            );
                        })
                    }
            </TableBody>
        </Table>
    );

};

UserListTable.propTypes = {
    users: PropTypes.array,
};

export default UserListTable;
