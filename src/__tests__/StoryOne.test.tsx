import * as React from 'react';
import { render, waitForElement } from 'react-testing-library';
import { StoryOne } from '../components';

describe('<StoryOne />', () => {
  test('renders page one correctly', () => {
    const { getByText } = render(<StoryOne />);
    waitForElement(() => getByText('Hello, I am Fishy. What is your name?'));
  });
  test('renders page two correctly', () => {
    const { getByText } = render(<StoryOne />);
    waitForElement(() => getByText('Hello, name'));
  });
});
