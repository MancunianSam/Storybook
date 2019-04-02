import * as React from 'react';
import styled from '@emotion/styled';

interface IStoryWindowProps {
  image: string;
  position?: string;
  size?: string;
  display?: string;
}

const StoryWindow: React.FunctionComponent<IStoryWindowProps> = styled.div(
  props => ({
    backgroundImage: `url(${props.image})`,
    backgroundPosition: props.position || '0% 0%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: props.size ? props.size : '',
    gridColumnStart: 2,
    gridRowStart: 2,
    position: 'relative'
  })
);

export { StoryWindow };
