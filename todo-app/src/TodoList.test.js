import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = 'take out trash'){
  const taskInput = todoList.getByLabelText('Task:');
  fireEvent.change(taskInput, {target: {value: task}});
  const submitBtn = todoList.getByText('Add a todo item');
  fireEvent.click(submitBtn); 
}

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('adds a todo',function(){
  const list = render(<TodoList/>);
  addTodo(list);

  expect(list.getByLabelText('Task:')).toHaveValue('');
  expect(list.getByText('take out trash')).toBeInTheDocument();
  expect(list.getByText('Edit')).toBeInTheDocument();
  expect(list.getByText('X')).toBeInTheDocument();
});

it('edits a todo',function(){
  const list = render(<TodoList/>);
  addTodo(list);

  fireEvent.click(list.getByText('Edit'));
  const editInput = list.getByDisplayValue('');
  fireEvent.change(editInput, {target: {value: ''}});
  fireEvent.click(list.getByText('Update'));
});

it('deletes a todo',function(){
  const list = render(<TodoList/>);
  addTodo(list);

  fireEvent.click(list.getByText('X'));
  expect(list.queryByText('take out trash')).not.toBeInTheDocument();
});