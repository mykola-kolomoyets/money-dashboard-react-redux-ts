import { FC } from 'react';

const TransactionTableHeader: FC = () => {
  const defaultCellClass = 'pt-m pb-m text-left text-myGray-300 font-normal';
  return (
    <thead>
      <tr>
        <th className={defaultCellClass}>Name</th>
        <th className={defaultCellClass}>Category</th>
        <th className={defaultCellClass}>Date</th>
        <th className={defaultCellClass}>Amount</th>
      </tr>
    </thead>
  );
};

export default TransactionTableHeader;
