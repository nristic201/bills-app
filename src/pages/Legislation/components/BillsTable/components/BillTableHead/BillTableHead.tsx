import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { billsTableHeadCells } from "../../BillsTable.utils";

export const BillsTableHead: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        {billsTableHeadCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
