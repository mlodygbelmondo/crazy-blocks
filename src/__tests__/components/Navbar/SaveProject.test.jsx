import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SaveProject from "@/components/Navbar/SaveProject";

describe("SaveProject", () => {

  it("renders a link", () => {
    render(<SaveProject />);
    const link = screen.getByText("Save Project");
    expect(link).toBeInTheDocument();
  });
});
