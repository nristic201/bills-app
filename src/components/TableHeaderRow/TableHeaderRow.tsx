import { TableCell, TableRow } from "@mui/material";
import { ITableHeaderRowItem } from "./TableHeaderRow.types";
import React from "react";
import { cellStyles } from "./TableHeaderRow.styles";

interface ITableHeaderRowProps {
  items: ITableHeaderRowItem[];
}

export const TableHeaderRow: React.FC<ITableHeaderRowProps> = ({ items }) => {
  return (
    <TableRow>
      {items.map((headCell) => (
        <TableCell sx={cellStyles} key={headCell.id} align={headCell.align}>
          {headCell.label}
        </TableCell>
      ))}
    </TableRow>
  );
};
