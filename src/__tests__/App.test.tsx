import * as React from 'react';
import App from '../App';
import { render, fireEvent, waitForElement } from 'react-testing-library';

it('renders without crashing', () => {
  const { container } = render(<App />);
  expect(container).not.toBeNull();
});

it('changes pages when the input is clicked', () => {
  const { getByTestId, getByAltText, getByText } = render(<App />);
  const button: HTMLElement = getByTestId('inputButton');
  const textInput: HTMLElement = getByAltText('input');

  fireEvent.change(textInput, { target: { value: 'TEST' } });
  fireEvent.click(button);
  waitForElement(() => getByText('Hello, TEST'));
});
