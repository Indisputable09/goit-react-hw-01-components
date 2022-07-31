import PropTypes from 'prop-types';
import { Table, TableHead, TableBody, TableUnit, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableUnit>{type}</TableUnit>
            <TableUnit>{amount}</TableUnit>
            <TableUnit>{currency}</TableUnit>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};