import React from "react";

import Table, { TableView } from "components/table";
import Typography from "components/typography";
import { ParagraphView } from "components/typography/paragraph";
import { TitleTag } from "components/typography/title";

import { hoc } from "utils/hoc";

import useTableTotal from "./table-total.hook";
import styles from "./table-total.module.scss";
import Button, { ButtonView } from "components/button";

const TableTotal = hoc(useTableTotal, ({ currentMonth, currentYear }) => (
	<section className={styles.table_total_container}>
		<div className={styles.table_total_row}>
			<Typography.Title Tag={TitleTag.h1}>
				Buyings for{" "}
				<Typography.Paragraph view={ParagraphView.regular} bold>
					{currentMonth} {currentYear}
				</Typography.Paragraph>{" "}
			</Typography.Title>

			<Button view={ButtonView.primary}>Add category +</Button>
		</div>

		<Table view={TableView.total} />
	</section>
));

export default TableTotal;
