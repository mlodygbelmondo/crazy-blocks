import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlayerControls from "@/components/Player/PlayerControls";
import { TbPlayerPlayFilled } from "react-icons/tb";

describe("PlayerControls", () => {
  beforeEach(() => {
    render(<PlayerControls />);
  });
  it("renders a play buttons", () => {
    const playButton = screen.getAllByRole("button");
    expect(playButton).toHaveLength(2);
  });
  it("renders without crashing", () => {
    render(<PlayerControls />);
  });
});
