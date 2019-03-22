import * as React from 'react';
import styled from '@emotion/styled';

export enum MenuPosition {
  left = 'left',
  right = 'right'
}

export interface IMenuConfiguration {
  colour: string;
  title: string;
}

interface IMenuContainerProps {
  position?: MenuPosition;
}

interface IMenuProps extends IMenuContainerProps {
  config: IMenuConfiguration[];
}

interface IMenuItemProps {
  colour: string;
}

const MenuContainer: React.FunctionComponent<IMenuContainerProps> = styled.div`
  height: auto;
  display: grid;
  grid-template-rows: 30% 30% 30%;
  gap: 10px;
  grid-row: 2;
  grid-column: ${props => (props.position === MenuPosition.right ? 3 : 1)};
`;

const MenuItem: React.FunctionComponent<IMenuItemProps> = styled.div`
  background: ${props => props.colour};
  border-radius: 5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Menu: React.FunctionComponent<IMenuProps> = props => {
  return (
    <MenuContainer position={props.position}>
      {props.config.map(config => {
        return (
          <MenuItem key={config.colour} colour={config.colour}>
            <h2>{config.title}</h2>
          </MenuItem>
        );
      })}
    </MenuContainer>
  );
};

export { Menu };
