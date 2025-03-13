import { SxProps, Theme } from "@mui/material";
import { IBillType } from "../../../../../../types/Bill";
import { alpha } from "@mui/material/styles";

export const billStatusStylesMapper = (theme: Theme) => ({
  Defeated: {
    backgroundColor: alpha(theme.palette.secondary.main, 0.1),
    color: "secondary.main",
  },
  Enacted: {
    backgroundColor: alpha(theme.palette.success.main, 0.1),
    color: "success.main",
  },
  Lapsed: {
    backgroundColor: alpha(theme.palette.info.main, 0.1),
    color: "info.main",
  },
  Current: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: "primary.main",
  },
  Withdrawn: {
    backgroundColor: alpha(theme.palette.warning.main, 0.1),
    color: "warning.dark",
  },
  Rejected: {
    backgroundColor: alpha(theme.palette.error.main, 0.1),
    color: "error.main",
  },
});

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
