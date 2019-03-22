import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { FootBall } from '../components';
import { matchers } from 'jest-emotion';
describe('<Football />', () => {
  expect.extend(matchers);

  test('renders without crashing', async () => {
    const { container, debug, getByTestId } = render(<FootBall />);
    const ball: HTMLElement | Error = await getByTestId('ball');
    if (!(ball instanceof Error)) {
      const fn: jest.Mock = jest.fn();
      fireEvent.dragOver(ball, fn);
    }
  });
});
