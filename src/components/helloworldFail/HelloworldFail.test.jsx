import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides `toBeInTheDocument`
import HelloWorld from "./HelloworldFail";

test("renders the correct greeting when the name is provided", () => {
  render(<HelloWorld name="John" />);
  const heading = screen.getByRole("heading", { name: /Hello, John!/i });
  expect(heading).toBeInTheDocument(); // This test will pass
});

test("renders an incorrect greeting and fails gracefully", () => {
  render(<HelloWorld name="John" />);
  const heading = screen.queryByRole("heading", {
    name: /Hello, Incorrect Name!/i,
  });
  expect(heading).toBeInTheDocument(); // This test will fail but not break the suite
});
