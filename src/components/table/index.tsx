import React, { FC } from "react";

import TableCategoryHead from "./table-category-head";
import TableTotalHead from "./table-total";

import styles from "./table.module.scss";

export enum TableView {
	total = "total",
	category = "category"
}

type TableProps = {
	view: TableView;
};

const Table: FC<TableProps> = ({ view }) => (
	<table className={styles.table}>
		{view === TableView.category ? <TableCategoryHead /> : <TableTotalHead />}
	</table>
);

export default Table;
