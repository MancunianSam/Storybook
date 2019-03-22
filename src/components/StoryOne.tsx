import * as React from 'react';

import { StoryWindow, Text } from '../components';
import fish from '../images/fish.jpg';
import fireworks from '../images/fireworks.gif';

interface IStoryOneProps {
  page: number;
  name: string;
}

const StoryOne: React.FunctionComponent<IStoryOneProps> = props => {
  return (
    <>
      {props.page === 1 && (
        <StoryWindow image={fish} position='8% 60%'>
          <Text>Hello, I am Fishy. What is your name?</Text>
        </StoryWindow>
      )}
      {props.page === 2 && (
        <StoryWindow image={fireworks} position='45% 0%'>
          <Text colour='white'>Hello, {props.name}</Text>
        </StoryWindow>
      )}
    </>
  );
};

export { StoryOne };
