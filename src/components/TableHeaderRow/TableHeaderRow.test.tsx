import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TableHeaderRow } from "./TableHeaderRow"; // Adjust the import path as necessary
import "@testing-library/jest-dom/vitest"; // Import jest-dom for Vitest
import { ITableHeaderRowItem } from "./TableHeaderRow.types";
import { Table, TableHead } from "@mui/material";

function capitalize(str: string) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const mockItems: ITableHeaderRowItem[] = [
  { id: "1", label: "Header 1", align: "left" },
  { id: "2", label: "Header 2", align: "center" },
  { id: "3", label: "Header 3", align: "right" },
];

const TableComponent = () => {
  return (
    <Table>
      <TableHead>
        <TableHeaderRow items={mockItems} />
      </TableHead>
    </Table>
  );
};
describe("TableHeaderRow Component", () => {
  render(<TableComponent />);
  it("renders TableCell elements as <th> tags", () => {
    const tableCells = screen.getAllByRole("columnheader");
    tableCells.forEach((cell) => {
      expect(cell.tagName).toBe("TH");
    });
  });

  it("renders the correct labels in each TableCell", () => {
    const table = screen.getByRole("table");
    const tableHeaderRow = within(table).getAllByRole("row")[0];

    mockItems.forEach((item) => {
      const cell = within(tableHeaderRow).getByText(item.label);
      expect(cell).toBeInTheDocument();
    });
  });

  it("renders the correct alignment for each TableCell", async () => {
    const table = screen.getByRole("table");
    const tableHeaderRow = within(table).getAllByRole("row")[0];

    mockItems.forEach((item) => {
      const cell = within(tableHeaderRow).getByText(item.label);
      expect(cell).toHaveClass(
        `MuiTableCell-align${capitalize(item.align as string)}`
      );
    });
  });
});
