import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders examples", async () => {
  render(<App />);
  const examples = await screen.findByTestId("examples");
  expect(examples).toBeInTheDocument();
});
