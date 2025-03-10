import { KeyboardArrowDown } from "@mui/icons-material";
import { IconProps, styled } from "@mui/material";

// Define a type for the props
interface RotatingIconProps extends IconProps {
  open: boolean;
}

export const RotatingIcon = styled(KeyboardArrowDown)<RotatingIconProps>(
  ({ open }) => ({
    transition: "transform .5s ease",
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  })
);
