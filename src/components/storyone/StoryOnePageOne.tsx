import * as React from 'react';
import fish from '../../images/fish.jpg';
import { StoryWindow, Text } from '../../components';

const StoryOnePageOne: React.FunctionComponent = () => {
  return (
    <StoryWindow image={fish} position='8% 60%'>
      <Text>Hello, I am Fishy. What is your name?</Text>
    </StoryWindow>
  );
};

export { StoryOnePageOne };
