import * as React from 'react';
import styled from '@emotion/styled';
const SunContainer: React.FunctionComponent = styled.div`
  display: flex;
  grid-column-start: 3;
  grid-row-start: 1;
  justify-content: center;
  margin-top: 40px;
`;

const SunImage: React.FunctionComponent = styled.div`
  border-radius: 100%;
  animation: App-logo-spin infinite 20s linear;
  background: radial-gradient(#f7d200, rgb(255, 233, 114));
  width: 100px;
  height: 100px;
  box-shadow: 1px 1px 30px #ffee96;
`;
const Sun: React.FunctionComponent<{}> = props => {
  return (
    <SunContainer>
      <SunImage />
    </SunContainer>
  );
};

export { Sun };
