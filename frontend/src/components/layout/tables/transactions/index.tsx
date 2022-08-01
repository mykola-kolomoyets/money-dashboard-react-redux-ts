import { FC } from 'react';
import TransactionTableHeader from '../../../ui/table/header/transactions';
import { useGetTransactionsQuery } from '../../../../store/api/expenses';
import { GetTransactionsHistoryResponse } from '../../../../utils/types/services/expenses';
import { CellTypes } from '../../../../utils/enums/table';
import { Row } from '../../../../utils/types/table';
import TableBody from '../../../ui/table/body';

const TransactionsTable: FC = () => {
  const {
    data: transactions,
    isError: isTransactionsError,
    isFetching: isTransactionsFetching,
    error: transactionsFetchError
  } = useGetTransactionsQuery('62e3b5aa2be430d42d6b23be', {
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true
  });

  const createRows = (transactions?: GetTransactionsHistoryResponse): Row[] =>
    transactions
      ? transactions?.map((transaction) => [
          {
            type: CellTypes.string,
            value: transaction.name
          },
          {
            type: CellTypes.string,
            value: transaction.category
          },
          {
            type: CellTypes.date,
            value: transaction.date
          },
          {
            type: CellTypes.amount,
            value: transaction.amount
          }
        ])
      : [];

  return (
    <table className="w-full mt-m">
      <TransactionTableHeader />

      <TableBody rows={createRows(transactions)} />
    </table>
  );
};

export default TransactionsTable;
