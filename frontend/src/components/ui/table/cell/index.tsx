import { FC } from 'react';

import { Cell } from '../../../../utils/types/table';
import { CellTypes } from '../../../../utils/enums/table';
import { getDecimalNumber } from '../../../../utils/functions';

const createCellValue = (cell: Cell): string => {
  switch (cell.type) {
    default:
      return '';

    case CellTypes.string: {
      return cell.value.toString();
    }

    case CellTypes.amount: {
      return getDecimalNumber(+cell.value).toString();
    }

    case CellTypes.date: {
      const [_, month, date, year] = new Date(cell.value)
        .toDateString()
        .split(' ');

      return `${date} ${month} ${year}`;
    }
  }
};

type TableCellProps = {
  cell: Cell;
  index: number;
};
const TableCell: FC<TableCellProps> = ({ cell }) => {
  return (
    <td className="pt-m pb-m pr-l">
      <p
        className={`text-p2 color-myGray-500 ${
          cell.type === CellTypes.amount ? 'font-bold' : ''
        }`}
      >
        {createCellValue(cell)}
      </p>
    </td>
  );
};

export default TableCell;
