import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
  render(<NewTodoForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('runs create function on form submit',function(){
  const todo = jest.fn();
  const { getByText } = render(<NewTodoForm createTodo={todo}/>);
  const btn = getByText('Add a todo item');
  fireEvent.click(btn);
  expect(todo).toHaveBeenCalled();
})