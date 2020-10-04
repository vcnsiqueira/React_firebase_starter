import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from './styled/Table.styled.js';
import ButtonIcon from '../Button/ButtonIcon';
import Search from '../Search';
import Badge from '../Badge';

const UserListTable = ({ users }) => {

    const header = ['Nome', 'E-mail', 'Último Login', 'Busca', 'Opções'];
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState(users);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
        searchData(event.target.value, users);
    };

    const removeAccent = word => word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    const searchData = (value, listObject) => { // search for multiple object
        if (value === " ") {
            setData(listObject);
        } else {
            const filteredData = listObject.filter(item => {
                return Object.keys(item).some(key => 
                    removeAccent(item[key].toString()).toLowerCase().trim().includes(removeAccent(value).toLowerCase())
                );
            });
            setData(filteredData);
        };
    }

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
                                return <TableHeaderCell key={index}><ButtonIcon variant="solid" color={'#FF9800'} hoverColor={'#FB8C00'} onClick={console.log('Hey!')}><icon className='fas fa-plus'/></ButtonIcon></TableHeaderCell>
                            }
                        })
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                    {
                        //users.filter(user => removeAccent(user.name).toLowerCase().includes(removeAccent(searchTerm).toLowerCase())).map((user, index) => {
                        data.map((user, index) => {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.lastLogin && null}</TableCell>
                                    <TableCell><Badge type='success'>Ativo</Badge></TableCell>
                                    <TableCell><ButtonIcon variant='outlined'><icon className='fas fa-ellipsis-v'/></ButtonIcon></TableCell>
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
