import * as React from 'react';
import styled from '@emotion/styled';

interface ITextProps {
  colour?: string;
  size?: string;
  alignSelf?: string;
}

const Text: React.FunctionComponent<ITextProps> = styled.h1`
  font-size: ${props => props.size || '50px'};
  font-family: Open Sans;
  color: ${props => props.colour || 'black'};
  ${props => (props.alignSelf ? `align-self:${props.alignSelf};` : '')}
  grid-column: 2;
  grid-row: 1 / 3;
`;

export { Text };
