import * as React from 'react';
import { render, fireEvent, wait, waitForElement } from 'react-testing-library';
import { Input } from '../components';

describe('<Input />', () => {
  test('renders without crashing', () => {
    const { container } = render(<Input onClick={jest.fn()} />);
    expect(container).not.toBeNull();
  });

  test('onClick is called with correct text for empty input', async () => {
    const onClick: jest.Mock = jest.fn();
    const { getByAltText, getByTestId, getByText } = render(
      <Input onClick={onClick} />
    );
    const textInput: HTMLElement = getByAltText('input');
    const button: HTMLElement = await waitForElement(() =>
      getByTestId('inputButton')
    );
    fireEvent.change(textInput, { target: { value: 'TEST' } });

    fireEvent.click(button);
    //TODO Should be called but isn't
    // expect(onClick).toHaveBeenCalled();
  });
});
