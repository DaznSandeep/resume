import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HelloWorld from "../HelloWorld";

test("renders the correct message", () => {
  render(<HelloWorld name="World" />);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});

test("renders with different name", () => {
  render(<HelloWorld name="React" />);
  expect(screen.getByText("Hello, React!")).toBeInTheDocument();
});
