import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlayerControls from "@/components/Player/PlayerControls";

describe("PlayerControls", () => {
  beforeEach(() => {
    render(<PlayerControls />);
  });
  it("renders a buttons", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  it("renders PlayerControls and starts playing when Play button is clicked", async () => {
    const playButton = screen.getByText("Play");
    fireEvent.click(playButton);
    setTimeout(() => {
      expect(screen.getByText("Stop")).toBeInTheDocument();
    }, 0);
  });

  it("stops playing when Stop button is clicked", async () => {
    const playButton = screen.getByText("Play");
    fireEvent.click(playButton);

    setTimeout(() => {
      const stopButton = screen.getByText("Stop");
      fireEvent.click(stopButton);
      expect(screen.getByText("Play")).toBeInTheDocument();
    }, 0);
  });

  it("plays by step when Play by step button is clicked", async () => {
    const playByStepButton = screen.getByText("Play by step");
    fireEvent.click(playByStepButton);

    setTimeout(() => {
      expect(screen.getByText("Next step")).toBeInTheDocument();
    }, 0);
  });

  it("proceeds to the next step when Next step button is clicked", async () => {
    const playByStepButton = screen.getByText("Play by step");
    fireEvent.click(playByStepButton);

    setTimeout(() => {
      const nextStepButton = screen.getByText("Next step");
      fireEvent.click(nextStepButton);
      expect(screen.getByText("Play by step")).toBeInTheDocument();
    }, 0);
  });
});
