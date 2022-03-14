export interface Page<T> {
  pageNo: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  items: T[];
}
