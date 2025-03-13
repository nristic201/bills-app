import { useCallback, useEffect, useState } from "react";
import { IBillSortParams, IBillStatus } from "../../../../../types/Bill";

export function useBillTableParams(page: number, rowsPerPage: number) {
  const [params, setParams] = useState<IBillSortParams>({
    limit: rowsPerPage,
    skip: Math.max((page - 1) * rowsPerPage, 0),
    bill_status: null,
  });

  const updateStatus = useCallback(
    (status: IBillStatus | null) => {
      setParams({
        limit: rowsPerPage,
        skip: Math.max((page - 1) * rowsPerPage, 0),
        bill_status: status,
      });
    },
    [page, rowsPerPage]
  );

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      limit: rowsPerPage,
      skip: Math.max((page - 1) * rowsPerPage, 0),
    }));
  }, [page, rowsPerPage]);

  return {
    params,
    updateStatus,
  };
}
