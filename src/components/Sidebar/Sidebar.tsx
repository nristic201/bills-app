import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MockDataService } from "../../services/mockData.service";
import {
  listItemButtonStyles,
  listItemStyles,
  sideBarContainerStyles,
} from "./Sidebar.styles";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export const Sidebar = () => {
  return (
    <Box sx={sideBarContainerStyles}>
      <nav>
        <List>
          {MockDataService.sideMenuItems.map((item) => (
            <ListItem sx={listItemStyles}>
              <ListItemButton sx={listItemButtonStyles}>
                <ListItemIcon>
                  <AcUnitIcon />
                </ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
