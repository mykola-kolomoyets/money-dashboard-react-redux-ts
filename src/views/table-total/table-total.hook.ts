import { months } from "utils/constants";

type TableCategoryProps = {}

const useTableTotal = ({ }: TableCategoryProps) => {
  const currentMonth = months[new Date().getMonth()];
  const currentYear = new Date().getFullYear();

  return {
    currentMonth,
    currentYear
  }
};

export default useTableTotal;