import styled from 'styled-components';

export const Table = styled.table`
width: 100%;
padding: 15px;
text-align: center;
background-color: lightgray;
`;

export const TableHead = styled.thead`
background-color: orange;
height: 50px;
`;

export const TableBody = styled.tbody`
background-color: #fff;
`;

export const TableRow = styled.tr`
:nth-child(even) {
    background-color: lavender;
}
`;

export const TableUnit = styled.td`
height: 40px;
`;