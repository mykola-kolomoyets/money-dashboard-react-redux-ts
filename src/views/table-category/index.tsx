import React from "react";

import Table, { TableView } from "components/table";
import Typography from "components/typography";
import { ParagraphView } from "components/typography/paragraph";
import { TitleTag } from "components/typography/title";

import { hoc } from "utils/hoc";

import useTableCategoryProps from "./table-category.hook";

const TableCategory = hoc(
	useTableCategoryProps,
	({ currentMonth, currentYear, category }) => (
		<section>
			<Typography.Title Tag={TitleTag.h1}>
				Buyings for{" "}
				<Typography.Paragraph view={ParagraphView.regular} bold>
					"{category}"
				</Typography.Paragraph>{" "}
				for{" "}
				<Typography.Paragraph view={ParagraphView.regular} bold>
					{currentMonth} {currentYear}
				</Typography.Paragraph>{" "}
			</Typography.Title>

			<Table view={TableView.category} />
		</section>
	)
);

export default TableCategory;
