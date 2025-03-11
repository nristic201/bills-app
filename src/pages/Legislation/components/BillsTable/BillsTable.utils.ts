import { TableCellProps } from "@mui/material";

export const billsTableHeadCells: {
  id: string;
  label: string;
  align?: TableCellProps["align"];
} = [
  {
    id: "number",
    label: "Number",
    align: "left",
  },
  {
    id: "type",
    label: "Type",
    align: "right",
  },
  {
    id: "status",
    label: "Status",
    align: "right",
  },
  {
    id: "sponsor",
    label: "Sponsor",
    align: "right",
  },
  {
    id: "actions",
    label: "Actions",
    align: "right",
  },
];
