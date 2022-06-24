import { useParams } from "react-router-dom";

import { months } from "utils/constants";

type TableCategoryProps = {}

type TableCategoryParams = "category";

const useTableCategoryProps = ({ }: TableCategoryProps) => {
  const currentMonth = months[new Date().getMonth()];
  const currentYear = new Date().getFullYear();

  const params = useParams<TableCategoryParams>();

  const { category } = params;

  return {
    currentMonth,
    currentYear,
    category
  }
};

export default useTableCategoryProps;