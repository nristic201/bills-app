import { SxProps, Theme } from "@mui/material";

export const modalContainerStyles: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)",
  minWidth: 360,
  padding: "16px",
};

export const modalContentStyles: SxProps = {
  overflowY: "auto",
};

export const modalHeaderStyles = (theme: Theme) => ({
  position: "relative",
  pb: 0,
  borderBottom: "1px solid",
  borderColor: theme.palette.grey[300],
  marginBottom: "24px",
});

export const closeIconStyles: SxProps = {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1,
};
