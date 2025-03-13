import React, { useState } from "react";

export function usePagination() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const onPageChange = React.useCallback((_: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onRowsPerPageChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  return {
    page,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
  };
}
