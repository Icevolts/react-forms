import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function() {
  render(<Todo />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot while editing", function() {
    const { asFragment, getByText } = render(<Todo />);
    const editButton = getByText('Edit');
    fireEvent.click(editButton);
    expect(asFragment()).toMatchSnapshot();
});

it('runs update function on form submit',function(){
  const update = jest.fn();
  const { getByText } = render(<Todo update={update}/>);
  const editBtn = getByText('Edit');
  fireEvent.click(editBtn);
  const updateBtn = getByText('Update');
  fireEvent.click(updateBtn);
  expect(update).toHaveBeenCalled();
});

it('runs delete function on form submit',function(){
  const remove = jest.fn();
  const { getByText } = render(<Todo remove={remove}/>);
  const delBtn = getByText('X');
  fireEvent.click(delBtn);
  expect(remove).toHaveBeenCalled();
});