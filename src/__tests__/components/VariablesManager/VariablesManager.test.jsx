import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VariablesManager from "@/components/VariablesManager/VariablesManager";
import { ReactFlowProvider } from "reactflow";

describe("VariablesManager", () => {
  beforeEach(() => {
    render(
      <ReactFlowProvider>
        <VariablesManager />
      </ReactFlowProvider>
    );
  });
  it("displays the variables Manager", () => {
    const manager = screen.getByText("Variables Manager");
    expect(manager).toBeInTheDocument();
  });
});
