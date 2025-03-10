import { SxProps } from "@mui/material";

export const sideBarContainerStyles: SxProps = {
  width: "320px",
};

export const listItemStyles: SxProps = {
  padding: 0,
};

export const listItemButtonStyles: SxProps = {
  borderTopRightRadius: "16px",
  borderBottomRightRadius: "16px",
  position: "relative",
  "&:hover": {
    backgroundColor: "primary.light",
    color: "primary.main",
    ".MuiSvgIcon-root": {
      fill: "currentColor",
    },
    "&::after": {
      content: `""`,
      position: "absolute",
      left: 0,
      backgroundColor: "primary.main",
      width: "4px",
      height: "100%",
    },
  },
};
