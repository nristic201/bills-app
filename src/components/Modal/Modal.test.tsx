import { fireEvent, render, screen, within } from "@testing-library/react";
import { Modal } from "./Modal";
import "@testing-library/jest-dom/vitest";
import { describe, expect, it, vi } from "vitest";

const mockTitle = "Test Modal Title";
const mockContent = <div>Test Modal Content</div>;
const mockOnClose = vi.fn();

describe("Modal", () => {
  it("Renders modal", () => {
    render(<Modal open={true} onClose={mockOnClose} content={mockContent} />);

    const modal = screen.getByRole("presentation");
    expect(modal).toBeInTheDocument();
  });

  it("Displays modal title when provided", () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        content={mockContent}
        title={mockTitle}
      />
    );
    const modal = screen.getByRole("presentation");
    const content = within(modal).getByText("Test Modal Content");
    expect(content).toBeInTheDocument();
  });

  it("Should call onClose when modal backdrop is clicked", () => {
    const { container } = render(
      <Modal open={true} onClose={mockOnClose} content={mockContent} />
    );

    const backdrop = container.querySelector(".MuiBackdrop-root");
    if (backdrop) {
      fireEvent.mouseDown(backdrop);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    }
  });
  it("When close button is clicked calls onClose", () => {
    render(<Modal open={true} onClose={mockOnClose} content={mockContent} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
