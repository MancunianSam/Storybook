import * as React from 'react';

import { CloudDirection, Cloud } from '../components/Cloud';
import { matchers } from 'jest-emotion';

import { render } from 'react-testing-library';
describe('<Cloud />', () => {
  expect.extend(matchers);

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
    const { container } = render(<Cloud transformX='200px' />);
    expect(container.firstChild).toHaveStyleRule('margin-left', '200px');
  });

  test('transformY prop sets the correct style', () => {
    const { container } = render(<Cloud transformY='200px' />);
    expect(container.firstChild).toHaveStyleRule('margin-top', '200px');
  });
});
