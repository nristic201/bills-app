import { SxProps } from "@mui/material";
import { IBillStatus } from "../../../../../../types/Bill";

export const billStatusStylesMapper: { [name in IBillStatus]: SxProps } = {
  Defeated: {
    backgroundColor: "secondary.light",
    color: "secondary.main",
  },
  Enacted: {
    backgroundColor: "success.light",
    color: "success.main",
  },
  Lapsed: {
    backgroundColor: "info.light",
    color: "info.main",
  },
  Current: {
    backgroundColor: "primary.light",
    color: "primary.main",
  },
  Withdrawn: {
    backgroundColor: "warning.light",
    color: "warning.dark",
  },
  Rejected: {
    backgroundColor: "error.light",
    color: "error.main",
  },
};

export const BillTypeStylesMapper: { [name in IBillType]: SxProps } = {
  Public: {
    color: "primary.main",
    backgroundColor: "transparent",
  },
  Private: {
    color: "secondary.main",
    backgroundColor: "transparent",
  },
  Hybrid: {
    color: "info.main",
    backgroundColor: "transparent",
  },
};
