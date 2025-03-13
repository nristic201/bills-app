import { TableCellProps } from "@mui/material";

export const headerCells: {
  id: string;
  label: string;
  align?: TableCellProps["align"];
}[] = [
  {
    id: "number",
    label: "Number",
    align: "left",
  },
  {
    id: "type",
    label: "Type",
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    align: "center",
  },
  {
    id: "sponsor",
    label: "Sponsor",
    align: "center",
  },
];
