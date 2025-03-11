import { Box, Container, styled } from "@mui/material";
import React from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";

export const PageLayout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Container
      sx={{
        gridTemplateRows: "auto",
        gridTemplateAreas: `
        "header header header header"
        "sidebar main main main"
        `,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
      }}
    >
      <Header />
      <Sidebar />
      <Box
        component={"main"}
        sx={{
          gridArea: "main",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
