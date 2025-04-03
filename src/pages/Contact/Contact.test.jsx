import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./Contact";

test("should clear input fields after submission", async () => {
  render(<Contact />);

  const nameInput = screen.getByLabelText("Full Name");
  const emailInput = screen.getByLabelText("Email");
  const messageInput = screen.getByLabelText("Message");
  const submitButton = screen.getByRole("button", { name: /submit message/i });

  // Fills out the form fields
  fireEvent.change(nameInput, { target: { value: "Test test" } });
  fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  fireEvent.change(messageInput, { target: { value: "Testing!" } });

  // Submits the form
  fireEvent.click(submitButton);

  // Waits for the form values to reset
  await waitFor(() => {
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(messageInput.value).toBe("");
  });
});
