import { render, screen } from "@testing-library/react";
import App from "./App";

test("render Counter App",() => {
  render(<App />);
  const counterAppText = screen.getByText("Counter App");
  expect(counterAppText).toBeInTheDocument();
})

