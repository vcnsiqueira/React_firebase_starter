import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from './styled/Table.styled.js';
import ButtonIcon from '../Button/ButtonIcon';
import Search from '../Search';
import Badge from '../Badge';

const UserListTable = ({ users }) => {

    const header = ['Nome', 'E-mail', 'Data de acesso', 'Último Login', 'Busca', 'Opções'];
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState(users);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null, icon: 'sort'});

    const handleSearch = event => {
        setSearchTerm(event.target.value);
        searchData(event.target.value, users);
    };

    const removeAccent = word => word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    const searchData = (value, listObject) => { // search for multiple object
        if (value === ' ' | value === '') {
            setData(listObject);
        } else {
            const filteredData = listObject.filter(item => {
                return Object.keys(item).some(key => 
                    removeAccent(item[key].toString()).toLowerCase().trim().includes(removeAccent(value).toLowerCase())
                );
            });
            setData(filteredData);
        };
    };

    const sortList = list => {
        console.log(sortConfig);
        let sortableList = [...list];
        console.log(sortableList);
        sortableList.sort((a, b) => {
            if(a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            };
            if(a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            };
            return 0;
        });
        console.log(sortableList);
        setData(sortableList);
    }

    const getKey = item => {
        if (item === 'Nome') {
            return 'name';
        } else if (item === 'E-mail') {
            return 'email';
        } else if (item === 'Data de acesso') {
            return 'creationDate';
        } else if (item === 'Último Login') {
            return 'lastLogin';
        };
    };

    const requestSort = item => {
        let direction = 'ascending';
        let icon = 'sort-up';
        const key = getKey(item);
        if(sortConfig.key === key && sortConfig.direction === direction) {
            direction = 'descending';
            icon = 'sort-down';
        };
        console.log(direction);
        console.log(icon);
        setSortConfig({
            key: key,
            direction: direction,
            icon: icon,
        });
    };

    const selectIcon = item => {
        const key = getKey(item);
        if(key !== sortConfig.key) {
            return ["sort", "#FFFFFF"];
        };
        return [sortConfig.icon, "#FF9800"];
    };

    useEffect(() => {
        sortList(data);
    }, [sortConfig]);

    return(
        <Table>
            <TableHeader>
                <TableRow>
                    {
                        header.map((item, index) => {
                            if(item !== 'Busca' && item !== 'Opções') {
                                return <TableHeaderCell key={index} onClick={() => requestSort(item)}>{item}<i style={{marginLeft: "5px", color: selectIcon(item)[1]}} className={`fas fa-${selectIcon(item)[0]}`}/></TableHeaderCell>
                            } else if (item === 'Busca') {
                                return <TableHeaderCell key={index}><Search value={searchTerm} onChange={handleSearch}/></TableHeaderCell>
                            } else {
                                return <TableHeaderCell key={index}><ButtonIcon variant="solid" color={'#FF9800'} hoverColor={'#FB8C00'}><icon className='fas fa-plus'/></ButtonIcon></TableHeaderCell>
                            }
                        })
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                    {  
                        data.map((user, index) => {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.creationDate}</TableCell>
                                    <TableCell>{user.lastLogin}</TableCell>
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
