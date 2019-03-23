import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { FootBall } from '../components';
import { matchers } from 'jest-emotion';

describe('<Football />', () => {
  expect.extend(matchers);

  test('renders without crashing', () => {
    const { container } = render(<FootBall />);
    expect(container).not.toBeNull();
  });

  test('dragging the ball hides the original image', () => {
    const { getByTestId } = render(<FootBall />);
    const ball: HTMLElement = getByTestId('ball');
    fireEvent.dragOver(ball);
    expect(ball.style.visibility).toEqual('hidden');
  });

  test('dropping the ball shows the original image', () => {
    const { getByTestId } = render(<FootBall />);
    const ball: HTMLElement = getByTestId('ball');
    fireEvent.dragEnd(ball);
    expect(ball.style.visibility).toEqual('visible');
  });

  test('dragging the ball does not hide the goal', () => {
    const { getByTestId } = render(<FootBall />);
    const goal: HTMLElement = getByTestId('goal');
    const ball: HTMLElement = getByTestId('ball');
    fireEvent.dragEnd(ball);
    expect(goal.style.visibility).not.toEqual('hidden');
  });

  test('dragging over the goal without drop does nothing', () => {
    const { getByTestId } = render(<FootBall />);
    const goal: HTMLElement = getByTestId('goal');
    const ball: HTMLElement = getByTestId('ball');
    fireEvent.dragOver(goal);
    expect(goal.style.visibility).not.toEqual('hidden');
    expect(ball.style.visibility).toEqual('visible');
  });

  test('dropping the ball on the goal shows the scored message', () => {
    const { getByText, getByTestId } = render(<FootBall />);
    const goal: HTMLElement = getByTestId('goal');
    fireEvent.drop(goal);
    getByText('Scored');
  });
});
