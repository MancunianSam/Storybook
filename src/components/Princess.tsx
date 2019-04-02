import * as React from 'react';
import styled from '@emotion/styled';
import castle from '../images/castle.png';
import princess from '../images/princess.png';
import { keyframes } from '@emotion/core';

export interface IPrincessProps {
  onAnimationEnd: () => void;
}

interface IPrincessImageProps extends IPrincessProps {
  onClick: () => void;
  src: string;
  isClicked?: boolean;
}

const slide: string = keyframes`
0% {  }
10% { transform: translateX(30%) scale(0.2);  }
20% {transform: translate(30%, 7%) scale(0.2);}
100%   { transform: translate(64%, 56%) scale(0.2); }
`;

const Castle: React.FunctionComponent<{ src: string }> = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0%;
`;

const PrincessImage: React.FunctionComponent<IPrincessImageProps> = styled.img`
  position: absolute;
  height: 100%;
  width: 70%;
  transform: scale(0.2);
  right: 29%;
  bottom: 37%;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`;

const PrincessImageAnimate: React.FunctionComponent<
  IPrincessImageProps
> = styled(PrincessImage)`
  animation: ${slide} 3s ease forwards;
`;

const Princess: React.FunctionComponent<IPrincessImageProps> = props => {
  if (props.isClicked) {
    return <PrincessImageAnimate {...props} />;
  } else {
    return <PrincessImage {...props} />;
  }
};

const PrincessInCastle: React.FunctionComponent<IPrincessProps> = props => {
  const [isClicked, setIsClicked]: [
    boolean,
    React.Dispatch<boolean>
  ] = React.useState<boolean>(false);
  const onClick: () => void = () => {
    setIsClicked(true);
  };
  return (
    <div
      style={{
        gridRowStart: 1,
        gridRowEnd: 3,
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
    >
      <Castle src={castle} />
      <Princess
        src={princess}
        onClick={onClick}
        isClicked={isClicked}
        onAnimationEnd={props.onAnimationEnd}
      />
    </div>
  );
};

export { PrincessInCastle as Princess };
