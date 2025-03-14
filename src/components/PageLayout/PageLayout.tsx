import { Box, Stack } from "@mui/material";
import React from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { containerStyles, mainContentStyles } from "./PageLayout.styles";
import { MockDataService } from "../../services/mockData.service";

export const PageLayout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Stack sx={containerStyles} flexDirection={"row"}>
      <Sidebar items={MockDataService.sideMenuItems} />
      <Stack flexDirection={"column"} flex={1}>
        <Header />
        <Box component={"main"} sx={mainContentStyles}>
          {children}
        </Box>
      </Stack>
    </Stack>
  );
};
