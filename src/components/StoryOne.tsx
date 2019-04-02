import * as React from 'react';

import { Princess } from './Princess';
import { Input } from './Input';
import { getNextPage } from '../util';
import {
  StoryOnePageOne,
  StoryOnePageTwo,
  StoryOnePageThree
} from './storyone/index';

const StoryOne: React.FunctionComponent = props => {
  const [inputText, setInputText]: [
    string,
    React.Dispatch<string>
  ] = React.useState<string>('');
  const [page, setPage]: [number, React.Dispatch<number>] = React.useState<
    number
  >(1);

  const onClick: (input: string) => void = input => {
    setInputText(input);
    setPage(getNextPage(1, page, input));
  };

  return (
    <>
      {page === 1 && <StoryOnePageOne />}
      {page === 2 && <StoryOnePageTwo inputText={inputText} />}
      {page === 3 && <StoryOnePageThree />}
      <Input onClick={onClick} />
    </>
  );
};

export { StoryOne };
