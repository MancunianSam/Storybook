import * as React from 'react';

import { CloudDirection, Cloud } from '../components/Cloud';
import { matchers } from 'jest-emotion';

import { render } from 'react-testing-library';
describe('<Cloud />', () => {
  expect.extend(matchers);

  const testCloud: (styleProp: string, transform: string) => void = (
    styleProp,
    transform
  ) => {
    const { container } = render(<Cloud transformX={transform} />);
    expect(container.firstChild).toHaveStyleRule(styleProp, transform);
  };

  test.each`
    cloudDirection
    ${CloudDirection.topLeftBottomRight}
    ${CloudDirection.topRightBottomLeft}
  `('$cloudDirection has the corrrect animation', ({ cloudDirection }) => {
    const { container } = render(<Cloud cloudDirection={cloudDirection} />);

    expect(container.firstChild).toHaveStyleRule(
      'animation',
      `animation-0 5s alternate infinite`
    );
  });

  test('transformX prop sets the correct style', () => {
    testCloud('margin-left', '200px');
  });

  test('transformY prop sets the correct style', () => {
    testCloud('margin-left', '300px');
  });
});
