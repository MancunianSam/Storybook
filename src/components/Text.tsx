import * as React from 'react';
import styled from '@emotion/styled';

interface ITextProps {
  colour?: string;
}

const Text: React.FunctionComponent<ITextProps> = styled.h1`
  margin-top: 40px;
  font-size: 50px;
  font-family: Open Sans;
  color: ${props => props.colour || 'black'};
`;

export { Text };
