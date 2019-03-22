import * as React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export enum CloudDirection {
  topLeftBottomRight = 'topLeftBottomRight',
  topRightBottomLeft = 'topRightBottomLeft'
}

interface ICloudProps {
  transformX?: string;
  transformY?: string;
  scale?: number;
  cloudDirection?: CloudDirection;
}

const CloudContainer: React.FunctionComponent = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 4;
`;

const topLeftBottomRight: string = keyframes`
from { transform: translate(0, 0);     }
to   { transform: translate(300px, 80px); }
`;

const topRightBottomLeft: string = keyframes`
from   { transform: translate(300px, 80px); }
to { transform: translate(100px, 80px);     }
`;

const Cloud: React.FunctionComponent<ICloudProps> = styled.div`
  background: white;
  animation: ${props =>
      props.cloudDirection === CloudDirection.topLeftBottomRight
        ? topLeftBottomRight
        : topRightBottomLeft}
    5s alternate infinite;
  border-radius: 100px;
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  height: 40px;
  width: 130px;
  position: fixed;
  margin-left: ${props => props.transformX};
  margin-top: ${props => props.transformY};

  &:after,
  :before {
    background: white;
    content: '';
    position: absolute;
  }

  &:after {
    border-radius: 100px;
    height: 40px;
    left: 25px;
    top: -18px;
    width: 40px;
  }

  &:before {
    border-radius: 200px;
    width: 60px;
    height: 60px;
    right: 20px;
    top: -25px;
  }
`;

export { CloudContainer, Cloud };
