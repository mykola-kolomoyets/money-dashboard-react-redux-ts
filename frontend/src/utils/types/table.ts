import { CellTypes } from '../enums/table';

export type Cell = {
  type: CellTypes;
  value: string | Date | number;
};

export type Row = Cell[];
