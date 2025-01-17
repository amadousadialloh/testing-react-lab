import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders the TodoApp", () => {
  render(<App />); // No need to assign render (App/>) to a variable if using screen

  const input = screen.getByLabelText("Add a new todo");
  expect(input).toBeInTheDocument();

  const button = screen.getByText("Add Todo");
  expect(button).toBeInTheDocument();

  const list = screen.queryByRole("list");
  expect(list).not.toBeInTheDocument();
});

test("allows a user to add a new todo", () => {
  render(<App />);

  const input = screen.getByLabelText("Add a new todo");
  const button = screen.getByText("Add Todo");
  fireEvent.change(input, { target: { value: "Do Homework" } });
  fireEvent.click(button);
  const todoItem = screen.getByText("Do Homework");
  expect(todoItem).toBeInTheDocument();
});
