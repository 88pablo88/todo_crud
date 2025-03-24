import { Todo } from "../screens/MisTareas/MisTareas";

export const localPager = (data: Todo[] | [], currentPage: number): Todo[] => {
  const first = 3 * currentPage - 3;
  const second = 3 * currentPage;

  const pageData = data.slice(first, second);

  return pageData;
};
