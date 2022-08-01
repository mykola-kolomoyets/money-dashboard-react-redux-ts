import { FC } from 'react';

import { Row } from '../../../../utils/types/table';
import TableRow from '../row';

type TableBodyProps = {
  rows: Row[];
};
const TableBody: FC<TableBodyProps> = ({ rows }) => (
  <tbody>
    {rows.map((row, index) => (
      <TableRow key={index} {...{ row }} />
    ))}
  </tbody>
);

export default TableBody;
