import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/Navbar/Navbar";

jest.mock("../../../components/Navbar/LoadProject", () => () => null);

describe("Navbar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(<Navbar />);
  });
  it("renders a navbar", () => {
    const navbar = screen.getByText("Crazy Blocks");
    expect(navbar).toBeInTheDocument();
  });
  it("renders a logo", () => {
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });
  it("renders a buttons", () => {
    const infoButton = screen.getAllByRole("button");
    expect(infoButton).toHaveLength(2);
  });
});
