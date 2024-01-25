import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GeneratePDF from "@/components/Navbar/GeneratePDF";

describe("GeneratePDF", () => {
  it("renders a link", () => {
    render(<GeneratePDF />);
    const link = screen.getByText("Generate PDF");
    expect(link).toBeInTheDocument();
  });
});
