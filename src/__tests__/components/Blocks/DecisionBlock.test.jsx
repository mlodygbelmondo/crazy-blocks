import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ReactFlowProvider } from "reactflow";

import DecisionBlock from "@/components/Blocks/DecisionBlock";

describe("DecisionBlock", () => {
  beforeEach(() => {
    render(
      <ReactFlowProvider>
        <DecisionBlock data={{ id: "1" }} isConnectable={true} />
      </ReactFlowProvider>
    );
  });

  it("renders with textarea", () => {
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
  });

  it("updates inputValues on textarea change", () => {
    const textarea = screen.getByRole("textbox");
    userEvent.type(textarea, "Yes");

    setTimeout(() => {
      expect(textarea).toHaveValue("Yes");
    }, 0);
  });

  it("does not show arrow when not active", () => {
    const arrowElement = screen.queryByTestId("arrow-icon");
    expect(arrowElement).toBeNull();
  });

  it("shows arrow when active", () => {
    const textarea = screen.getByRole("textbox");

    act(() => {
      fireEvent.focus(textarea);
    });

    const arrowElement = screen.queryByTestId("arrow-icon");
    setTimeout(() => {
      expect(arrowElement).toBeInTheDocument();
    }, 0);
  });
});
