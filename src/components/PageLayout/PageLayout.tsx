import { Box, Stack } from "@mui/material";
import React from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { containerStyles, mainContentStyles } from "./PageLayout.styles";

export const PageLayout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Stack sx={containerStyles} flexDirection={"row"}>
      <Sidebar />
      <Stack flexDirection={"column"} flex={1}>
        <Header />
        <Box component={"main"} sx={mainContentStyles}>
          {children}
        </Box>
      </Stack>
    </Stack>
  );
};
