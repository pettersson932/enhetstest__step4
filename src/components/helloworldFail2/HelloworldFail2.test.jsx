// src/components/HelloWorld.test.jsx
import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloworldFail2";

test("renders greeting message with the provided name", () => {
  render(<HelloWorld name="John" />);
  const heading = screen.getByRole("heading", { name: /Hello, John 444555!/i });
  expect(heading).toBeInTheDocument(); // Using jest-dom matcher
});
