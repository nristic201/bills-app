import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Sidebar } from "./Sidebar"; // Adjust the import path as necessary
import { MockDataService } from "../../services/mockData.service";
import "@testing-library/jest-dom/vitest"; // Import jest-dom for Vitest
import { MemoryRouter } from "react-router";

describe("Sidebar Component", () => {
  it("renders the Sidebar component", () => {
    render(
      <MemoryRouter>
        <Sidebar items={MockDataService.sideMenuItems} />
      </MemoryRouter>
    );
    // Check if the Dashboard title is rendered
    const dashboardTitle = screen.getByText("Dashboard");
    expect(dashboardTitle).toBeInTheDocument();
    expect(dashboardTitle.tagName).toBe("H1");

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(MockDataService.sideMenuItems.length);

    MockDataService.sideMenuItems.forEach((item) => {
      const listItemText = screen.getByText(item.text);
      expect(listItemText).toBeInTheDocument();
      const listItemLink = screen.getByRole("link", { name: item.text });
      expect(listItemLink).toHaveAttribute("href", item.to);
    });
  });
});
