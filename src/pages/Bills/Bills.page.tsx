import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import BillsTable from "./components/BillsTable/BillsTable";
import FavoriteBillsTable from "./components/FavoriteBillsTable/FavoriteBillsTable";

export const BillsPage: React.FC = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (_: unknown, newValue: string) => {
    setValue(newValue);
  };
  return (
    <PageLayout>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Bills" value="1" />
              <Tab label="Favorite Bills" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BillsTable />
          </TabPanel>
          <TabPanel value="2">
            <FavoriteBillsTable />
          </TabPanel>
        </TabContext>
      </Box>
    </PageLayout>
  );
};
