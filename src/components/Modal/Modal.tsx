import {
  Box,
  Typography,
  Modal as MuiModal,
  IconButton,
  SxProps,
} from "@mui/material";
import React, { useCallback } from "react";
import {
  closeIconStyles,
  modalContainerStyles,
  modalContentStyles,
  modalHeaderStyles,
} from "./Modal.styles";
import { Close } from "@mui/icons-material";

interface IModalProps {
  open: boolean;
  onClose: () => void;
  content: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const { open, onClose, content, title } = props;

  const handleOnClose = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onClose?.();
    },
    [onClose]
  );
  return (
    <MuiModal open={open} onClose={handleOnClose}>
      <Box sx={{ ...modalContainerStyles, width: 732 }}>
        <IconButton onClick={handleOnClose} sx={closeIconStyles}>
          <Close />
        </IconButton>
        {title ? (
          <Box sx={modalHeaderStyles}>
            <Typography variant="h5" component={"h2"}>
              {title}
            </Typography>
          </Box>
        ) : undefined}
        <Box sx={modalContentStyles}>{content}</Box>
      </Box>
    </MuiModal>
  );
};
