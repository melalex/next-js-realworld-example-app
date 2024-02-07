export interface Pagination {
  limit: string;
  offset: string;
}

export function toPagination(page: number, pageSize: number) {
  return {
    limit: pageSize,
    offset: (page - 1) * pageSize,
  };
}
