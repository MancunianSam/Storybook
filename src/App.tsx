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
import { IMenuConfiguration, MenuPosition } from './components/Menu';
import fish from './images/fish.jpg';

const App: React.FunctionComponent = () => {
  const [name, setName]: [string, React.Dispatch<string>] = React.useState<
    string
  >('');
  const [page, setPage]: [number, React.Dispatch<number>] = React.useState<
    number
  >(1);
  const leftMenuConfig: IMenuConfiguration[] = [
    {
      colour: '#0cff79',
      title: 'Story 1'
    },
    {
      colour: '#f6ff4f',
      title: 'Story 2'
    },
    {
      colour: '#ff4f4f',
      title: 'Story 3'
    }
  ];

  const rightMenuConfig: IMenuConfiguration[] = [
    {
      colour: '#f6ff4f',
      title: 'Maths'
    },
    {
      colour: '#ff4f4f',
      title: 'Games'
    },
    {
      colour: '#0cff79',
      title: 'Something Else'
    }
  ];

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
        <Cloud transformX='600px' transformY='10px' scale={2} />
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
