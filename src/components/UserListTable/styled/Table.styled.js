import styled from 'styled-components';

const defaultColor = '#3F51B5';

export const Table = styled.table`
    border-collapse: collapse;
    width: 98%;
    margin: 0 2%;
`;

export const TableRow = styled.tr`
    &:nth-child(odd) {
        background-color: #E8EAF6;
    };
    &:nth-child(even) {
        background-color: #C5CAE9;
    };
    /*&:hover {
        background-color: #7986CB;
    };*/
`;

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``;

export const TableHeaderCell = styled.th`
    text-align: center;
    padding: 0.2rem;
    background-color: ${defaultColor};
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
`;

export const TableCell = styled.td`
    text-align: center;
    padding: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 0.8rem;
`;