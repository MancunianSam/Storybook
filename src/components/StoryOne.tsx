import * as React from 'react';

import { StoryWindow, Text } from '../components';
import fish from '../images/fish.jpg';
import { Princess } from './Princess';
import { Input } from './Input';
import { getNextPage } from '../util';

const StoryOne: React.FunctionComponent = props => {
  const [inputText, setInputText]: [
    string,
    React.Dispatch<string>
  ] = React.useState<string>('');
  const [page, setPage]: [number, React.Dispatch<number>] = React.useState<
    number
  >(1);
  const [text, setText]: [string, React.Dispatch<string>] = React.useState<
    string
  >(`Hello, ${inputText}. My name is nef. Click me to slide`);

  const onClick: (input: string) => void = input => {
    setInputText(input);
    setPage(getNextPage(1, page, input));
  };

  return (
    <>
      {page === 1 && (
        <StoryWindow image={fish} position='8% 60%'>
          <Text>Hello, I am Fishy. What is your name?</Text>
        </StoryWindow>
      )}
      {page === 2 && (
        <StoryWindow image=''>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '70% 30%',
              gridTemplateRows: '50% 50%',
              height: '100%'
            }}
          >
            <Princess
              onAnimationEnd={() => {
                setText('Type next in the box');
              }}
            />

            <Text colour='white' size='30px' alignSelf='center'>
              {text}
            </Text>
          </div>
        </StoryWindow>
      )}
      <Input onClick={onClick} />
    </>
  );
};

export { StoryOne };
