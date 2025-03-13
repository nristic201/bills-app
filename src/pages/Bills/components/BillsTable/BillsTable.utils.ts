import { TableCellProps } from "@mui/material";
import { IBillStatus } from "../../../../types/Bill";

export const billsTableHeadCells: {
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
  {
    id: "actions",
    label: "Actions",
    align: "right",
  },
];

export const billStatusOptions: {
  value: IBillStatus;
  label: string;
  name: string;
}[] = [
  { value: "Current", name: "Current", label: "Current" },
  { value: "Defeated", name: "Defeated", label: "Defeated" },
  { value: "Enacted", name: "Enacted", label: "Enacted" },
  { value: "Lapsed", name: "Lapsed", label: "Lapsed" },
  { value: "Rejected", name: "Rejected", label: "Rejected" },
  { value: "Withdrawn", name: "Withdrawn", label: "Withdrawn" },
];
