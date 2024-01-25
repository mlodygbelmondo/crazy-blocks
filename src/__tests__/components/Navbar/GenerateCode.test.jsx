import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GenerateCode from "@/components/Navbar/GenerateCode";

describe("GenerateCode", () => {
  it("renders a title", () => {
    render(<GenerateCode />);
    const title = screen.getByText("Generate code");
    expect(title).toBeInTheDocument();
  });

});
