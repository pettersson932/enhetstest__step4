// src/components/HelloWorld.test.jsx
import { render, screen } from "@testing-library/react";
import HelloWorld from "./Helloworldfail";

test("renders greeting message with the provided name", () => {
  render(<HelloWorld name="John" />);
  // Introduced intentional mismatch in the expected text
  const heading = screen.getByRole("heading", { name: /Hi, John!/i });
  expect(heading).toBeInTheDocument(); // This will fail as "Hi, John!" is not rendered
});
