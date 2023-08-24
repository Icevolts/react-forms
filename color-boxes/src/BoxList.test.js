import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import BoxList from './BoxList';

function addBox(boxList, width = '5', height = '5', backgroundColor= 'purple'){
  const widthInput = boxList.getByLabelText('Width');
  const heightInput = boxList.getByLabelText('Height');
  const backgroundInput = boxList.getByLabelText('Background Color');
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  fireEvent.change(backgroundInput, { target: { value: backgroundColor } });
  const btn = boxList.getByText('Add a box');
  fireEvent.click(btn);
}

test('renders without crash', () => {
  render(<BoxList />);
});

test('matches snapshot',() => {
  const {asFragment} = render(<BoxList/>)
  expect(asFragment).toMatchSnapshot();
});

test('adds a box', () => {
    const boxList = render(<BoxList/>);

    expect(boxList.queryByText('Delete the box')).not.toBeInTheDocument();

    addBox(boxList);

    const deleteButton = boxList.queryByText('Delete the box');
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton.previousSibling).toHaveStyle(`width: 5em; height: 5em; background-color: purple`);
});

it('can remove box',function(){
  const boxList = render(<BoxList/>);
  addBox(boxList);
  const deleteButton = boxList.queryByText('Delete the box'); 

  fireEvent.click(deleteButton);
  expect(deleteButton).not.toBeInTheDocument();
});
