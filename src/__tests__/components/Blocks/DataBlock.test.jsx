import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ReactFlowProvider } from "reactflow";
import "@testing-library/user-event";

import DataBlock from "@/components/Blocks/DataBlock";

describe("DataBlock", () => {
  it("renders a textarea", () => {
    render(
      <ReactFlowProvider>
        <DataBlock data={{ id: "1" }} isConnectable={true} />
      </ReactFlowProvider>
    );

    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
  });
  it("updates inputValues on textarea change", () => {
    render(
      <ReactFlowProvider>
        <DataBlock data={{ id: "1" }} isConnectable={true} />
      </ReactFlowProvider>
    );

    const textarea = screen.getByRole("textbox");
    userEvent.type(textarea, "Hello, World!");
    setTimeout(() => {
      expect(textarea).toHaveValue("Hello, World!");
    }, 0);
  });
  it("does not show arrow when not active", () => {
    render(
      <ReactFlowProvider>
        <DataBlock data={{ id: "1" }} isConnectable={true} />
      </ReactFlowProvider>
    );

    const arrowElement = screen.queryByTestId("arrow-icon");
    expect(arrowElement).toBeNull();
  });
  it("shows arrow when active", () => {
    render(
      <ReactFlowProvider>
        <DataBlock data={{ id: "1" }} isConnectable={true} />
      </ReactFlowProvider>
    );

    const textarea = screen.getByRole("textbox");

    fireEvent.focus(textarea);

    const arrowElement = screen.queryByTestId("arrow-icon");
    setTimeout(() => {
      expect(arrowElement).toBeInTheDocument();
    }, 0);
  });
});
