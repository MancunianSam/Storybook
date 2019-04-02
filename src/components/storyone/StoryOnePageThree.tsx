import * as React from 'react';
import { StoryWindow } from '../StoryWindow';
import box from '../../images/box.png';
import pig from '../../images/pig.png';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { Text } from '../Text';

interface IBaseImageProps {
  src: string;
}

interface IPigImageProps extends IBaseImageProps {
  clicked: boolean;
  onAnimationEnd: () => void;
  onAnimationIteration?: () => void;
}

const PageThreeWrapper: React.FunctionComponent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const animatePig: string = keyframes`
0% { opacity : 1;  }
99% { transform: translateY(200%); opacity: 0.8; }
100%   { opacity: 0; }
`;

const PigImage: React.FunctionComponent<IBaseImageProps> = styled.img`
  height: 20%;
  position: absolute;
  left: 30%;
  opacity: 0;
  animation-delay: 0.5s;
`;

const PigImageAnimate: React.FunctionComponent<IPigImageProps> = styled(
  PigImage
)`
  animation: ${animatePig} 2s 2 ease forwards;
`;

const StoryOnePageThree: React.FunctionComponent = props => {
  const [isClicked, setIsClicked]: [
    boolean,
    React.Dispatch<boolean>
  ] = React.useState<boolean>(false);

  const [text, setText]: [string, React.Dispatch<string>] = React.useState<
    string
  >('Click the box');

  const [count, setCount]: [number, React.Dispatch<number>] = React.useState<
    number
  >(0);

  const onAnimationIteration: () => void = () => {
    if (count < 4) {
      setCount(count + 1);
    }
  };

  const Pig: React.FunctionComponent<IPigImageProps> = props => {
    if (props.clicked) {
      return (
        <PigImageAnimate
          {...props}
          onAnimationIteration={onAnimationIteration}
        />
      );
    } else {
      return <PigImage src={props.src} />;
    }
  };

  const onClick: () => void = () => {
    setIsClicked(true);
    setCount(1);
    setText('Count the pigs');
  };

  const onAnimationEnd: () => void = () => {
    setIsClicked(false);
    setCount(5);
  };

  return (
    <StoryWindow image=''>
      <PageThreeWrapper>
        <div style={{ display: 'flex' }}>
          <Text colour='white'>{text}</Text>
          {count > 0 && (
            <Text marginLeft='10px' colour='red'>
              {count}
            </Text>
          )}
        </div>
        <img
          src={box}
          style={{ position: 'absolute', top: '30%' }}
          onClick={onClick}
        />
        <Pig src={pig} clicked={isClicked} onAnimationEnd={onAnimationEnd} />
      </PageThreeWrapper>
    </StoryWindow>
  );
};
export { StoryOnePageThree };
