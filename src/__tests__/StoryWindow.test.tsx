import * as React from 'react';
import { render } from 'react-testing-library';
import { StoryWindow } from '../components';
import { matchers } from 'jest-emotion';

describe('<StoryWindow />', () => {
  expect.extend(matchers);

  test('renders without crashing', () => {
    const { container } = render(<StoryWindow image='' />);
    expect(container).not.toBeNull();
  });

  test('renders the correct image', () => {
    const { container } = render(<StoryWindow image='anImage' />);
    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      'url(anImage)'
    );
  });

  test('renders the correct default position', () => {
    const { container } = render(<StoryWindow image='anImage' />);
    expect(container.firstChild).toHaveStyleRule(
      'background-position',
      '0% 0%'
    );
  });

  test('renders the correct custom position', () => {
    const { container } = render(
      <StoryWindow image='anImage' position='40% 30%' />
    );
    expect(container.firstChild).toHaveStyleRule(
      'background-position',
      '40% 30%'
    );
  });
});
