import * as React from 'react';
import { render } from 'react-testing-library';
import { StoryOne } from '../components';

describe('<StoryOne />', () => {
  test('renders page one correctly', () => {
    const { getByText } = render(<StoryOne name='' page={1} />);
    getByText('Hello, I am Fishy. What is your name?');
  });
  test('renders page two correctly', () => {
    const { getByText } = render(<StoryOne name='name' page={2} />);
    getByText('Hello, name');
  });
});
