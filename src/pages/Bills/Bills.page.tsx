import React from "react";
import BillsTable from "./components/BillsTable/BillsTable";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Section } from "../../components";

export const BillsPage: React.FC = () => {
  return (
    <PageLayout>
      <Section title="Bills">
        <BillsTable />
      </Section>
    </PageLayout>
  );
};
