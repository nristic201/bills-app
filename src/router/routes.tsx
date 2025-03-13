import { RouteProps } from "react-router";
import { BillsPage } from "../pages";
import { PageLayout } from "../components/PageLayout";

export const routes: Pick<RouteProps, "element" | "path" | "index">[] = [
  {
    path: "/",
    index: true,
    element: <BillsPage />,
  },
  {
    path: "/page2",
    element: (
      <PageLayout>
        <div />
      </PageLayout>
    ),
  },
];
