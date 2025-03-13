import { TableCellProps } from "@mui/material";

export interface ITableHeaderRowItem {
  id: string;
  label: string;
  align?: TableCellProps["align"];
}
