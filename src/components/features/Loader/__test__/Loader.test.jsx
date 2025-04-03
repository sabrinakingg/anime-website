import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Loader from "../Loader";

test("renders the loading spinner", () => {
  render(<Loader />);
  const loaderElement = screen.getByRole("status");
  expect(loaderElement).toBeInTheDocument
});
