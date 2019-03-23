import * as React from 'react';
import { render, fireEvent, wait, waitForElement } from 'react-testing-library';
import { Input } from '../components';

describe('<Input />', () => {
  test('renders without crashing', () => {
    const { container } = render(<Input onClick={jest.fn()} />);
    expect(container).not.toBeNull();
  });
});
