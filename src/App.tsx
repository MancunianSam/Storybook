import * as React from 'react';
import './App.css';
import {
  Sun,
  Cloud,
  CloudContainer,
  Menu,
  Input,
  StoryOne
} from './components';
import { CloudDirection } from './components/Cloud';
import { MenuPosition } from './components/Menu';
import { leftMenuConfig, rightMenuConfig } from './config/config';

const App: React.FunctionComponent = () => {
  const [name, setName]: [string, React.Dispatch<string>] = React.useState<
    string
  >('');
  const [page, setPage]: [number, React.Dispatch<number>] = React.useState<
    number
  >(1);
  const onClick: (input: string) => void = input => {
    setName(input);
    setPage(page + 1);
  };
  return (
    <div className='App'>
      <Sun />
      <CloudContainer>
        <Cloud transformX='100px' transformY='10px' />
        <Cloud
          transformX='400px'
          transformY='30px'
          cloudDirection={CloudDirection.topLeftBottomRight}
        />
        <Cloud transformX='600px' transformY='10px' />
      </CloudContainer>
      <div style={{ height: 'auto' }} />
      <Menu config={leftMenuConfig} />
      <Menu config={rightMenuConfig} position={MenuPosition.right} />
      <StoryOne page={page} name={name} />
      <Input onClick={onClick} />
    </div>
  );
};

export default App;
