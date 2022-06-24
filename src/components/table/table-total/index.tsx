import React from "react";
import cn from "classnames";

import styles from "./../table.module.scss";

const TableTotalHead = () => (
	<thead className={cn(styles.table__head, styles.table__head_total)}>
		<tr>
			<th rowSpan={2}>Planned for month</th>
			<th colSpan={4}>Buyings</th>
			<th colSpan={3}>Total per month</th>
		</tr>

		<tr>
			<th>1st week</th>
			<th>2nd week</th>
			<th>3rd week</th>
			<th>4th week</th>

			<th>Buyings</th>
			<th>Plan</th>
			<th>Economy</th>
		</tr>

		<tr>
			<th>category</th>

			<th>amount</th>
			<th>amount</th>
			<th>amount</th>
			<th>amount</th>

			<th>amount</th>
			<th>amount</th>
			<th>amount</th>
		</tr>
	</thead>
);

export default TableTotalHead;
