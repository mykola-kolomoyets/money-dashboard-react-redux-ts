import React from "react";

import styles from "./../table.module.scss";

const TableCategoryHead = () => (
	<thead className={styles.table__head}>
		<tr>
			<th colSpan={2} rowSpan={2}>
				Planned for month
			</th>
			<th colSpan={8}>Buyings</th>
			<th colSpan={5}>Total per month</th>
		</tr>

		<tr>
			<th colSpan={2}>1st week</th>
			<th colSpan={2}>2nd week</th>
			<th colSpan={2}>3rd week</th>
			<th colSpan={2}>4th week</th>
			<th colSpan={2}>Buyings</th>
			<th>Plan</th>
			<th colSpan={2}>Economy</th>
		</tr>

		<tr>
			<th>products names</th>
			<th>amount</th>

			<th>quantity</th>
			<th>amount</th>

			<th>quantity</th>
			<th>amount</th>

			<th>quantity</th>
			<th>amount</th>

			<th>quantity</th>
			<th>amount</th>

			<th>quantity</th>
			<th>amount</th>

			<th>amount</th>

			<th>quantity</th>
			<th>amount</th>
		</tr>
	</thead>
);

export default TableCategoryHead;
