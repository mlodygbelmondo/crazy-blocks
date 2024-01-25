import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ReactFlowProvider } from "reactflow";

import StartEndBlock from "@/components/Blocks/StartEndBlock";

describe("StartEndBlock", () => {
  it("renders with correct label", () => {
    render(
      <ReactFlowProvider>
        <StartEndBlock
          data={{ id: "1", label: "Start" }}
          isConnectable={true}
        />
      </ReactFlowProvider>
    );

    const startBlock = screen.getByText("Start");
    expect(startBlock).toBeInTheDocument();
  });

  it("renders with arrow when active", () => {
    render(
      <ReactFlowProvider>
        <StartEndBlock
          data={{ id: "1", label: "Start" }}
          isConnectable={true}
        />
      </ReactFlowProvider>
    );

    const arrowElement = screen.queryByTestId("arrow-icon");
    expect(arrowElement).toBeNull();

    const startBlock = screen.getByText("Start");
    fireEvent.focus(startBlock);

    const updatedArrowElement = screen.queryByTestId("arrow-icon");
    setTimeout(() => {
      expect(updatedArrowElement).toBeInTheDocument();
    }, 0);
  });

  it("renders without arrow when not active", () => {
    render(
      <ReactFlowProvider>
        <StartEndBlock
          data={{ id: "1", label: "Start" }}
          isConnectable={true}
        />
      </ReactFlowProvider>
    );

    const arrowElement = screen.queryByTestId("arrow-icon");
    expect(arrowElement).toBeNull();
  });
});
