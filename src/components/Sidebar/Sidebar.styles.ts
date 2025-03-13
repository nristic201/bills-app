import { SxProps, Theme } from "@mui/material";

export const sideBarContainerStyles = (theme: Theme) => ({
  gridArea: "sidebar",
  width: "280px",
  padding: "32px",
  background: "white",
  borderRight: "1px solid",
  borderRightColor: theme.palette.grey[200],
});

export const listStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};
export const listItemStyles: SxProps = {
  padding: 0,
  background: "primary.main",
};

export const linkStyles: SxProps = {
  padding: "12px 16px",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "primary.main",
    color: "white",
  },
  "&.active": {
    backgroundColor: "primary.main",
    color: "white",
  },
};
