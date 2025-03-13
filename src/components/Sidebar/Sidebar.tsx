import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { MockDataService } from "../../services/mockData.service";
import {
  linkStyles,
  listItemStyles,
  listStyles,
  sideBarContainerStyles,
} from "./Sidebar.styles";
import { NavLink } from "react-router";

export const Sidebar: React.FC = () => {
  return (
    <Box component={"nav"} sx={sideBarContainerStyles}>
      <Stack gap={"32px"}>
        <Typography component="h1" variant="h4">
          Dashboard
        </Typography>
        <List sx={listStyles}>
          {MockDataService.sideMenuItems.map((item) => (
            <ListItem sx={listItemStyles}>
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
