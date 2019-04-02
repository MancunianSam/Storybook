import * as React from 'react';
import { StoryWindow } from '../StoryWindow';
import { Princess } from '../Princess';
import { Text } from '../Text';
import styled from '@emotion/styled';

interface IPageTwoProps {
  inputText: string;
}

const PageTwoWrapper: React.FunctionComponent = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 50% 50%;
  height: 100%;
`;

const StoryOnePageTwo: React.FunctionComponent<IPageTwoProps> = props => {
  const [text, setText]: [string, React.Dispatch<string>] = React.useState<
    string
  >(`Hello, ${props.inputText}. My name is Nef. Click me to slide`);

  const onAnimationEnd: () => void = () => {
    setText('Type <div style="color:red;">next</div> in the box');
  };

  return (
    <StoryWindow image=''>
      <PageTwoWrapper>
        <Princess onAnimationEnd={onAnimationEnd} />

        <Text colour='white' size='30px' alignSelf='center'>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </Text>
      </PageTwoWrapper>
    </StoryWindow>
  );
};
export { StoryOnePageTwo };
