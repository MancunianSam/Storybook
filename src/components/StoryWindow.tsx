import * as React from 'react';
import styled from '@emotion/styled';

interface IStoryWindowProps {
  image: string;
  position?: string;
}

const StoryWindow: React.FunctionComponent<IStoryWindowProps> = styled.div(
  props => ({
    backgroundImage: `url(${props.image})`,
    backgroundPosition: props.position || '0% 0%',
    gridColumnStart: 2,
    gridRowStart: 2
  })
);

export { StoryWindow };
