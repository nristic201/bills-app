import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  linkStyles,
  listItemStyles,
  listStyles,
  sideBarContainerStyles,
} from "./Sidebar.styles";
import { NavLink } from "react-router";

export interface ISideMenuItem {
  to: string;
  text: string;
  id: string;
}
interface ISidebarProps {
  items: ISideMenuItem[];
}

export const Sidebar: React.FC<ISidebarProps> = ({ items }) => {
  return (
    <Box component={"nav"} sx={sideBarContainerStyles}>
      <Stack gap={"32px"}>
        <Typography component="h1" variant="h4">
          Dashboard
        </Typography>
        <List sx={listStyles}>
          {items.map((item) => (
            <ListItem sx={listItemStyles} key={item.id}>
              <ListItemButton sx={linkStyles} component={NavLink} to={item.to}>
                <ListItemText>{item.text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
};
