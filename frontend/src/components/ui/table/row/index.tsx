import { FC } from 'react';

import { Row } from '../../../../utils/types/table';

import TableCell from '../cell';

type TableRowProps = {
  row: Row;
};
const TableRow: FC<TableRowProps> = ({ row }) => (
  <tr className="border-b border-b-myGray-50">
    {row.map((cell, index) => (
      <TableCell key={cell.type + index} {...{ cell, index }} />
    ))}
  </tr>
);

export default TableRow;
