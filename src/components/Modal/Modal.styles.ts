import { SxProps } from "@mui/material";

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
};

export const modalContentStyles: SxProps = {
  overflowY: "auto",
  p: 2,
};

export const modalHeaderStyles: SxProps = {
  position: "relative",
  p: 2,
  pb: 0,
};

export const closeIconStyles: SxProps = {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1,
};
