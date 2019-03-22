import * as React from 'react';
import football from '../images/football.png';
import goalImage from '../images/goal.jpg';
import styled from '@emotion/styled';

interface IDraggableDiv {
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
  draggable?: boolean;
  'data-testid'?: string;
}

const FootBall: React.FunctionComponent<{}> = props => {
  const [goal, setGoal]: [boolean, React.Dispatch<boolean>] = React.useState<
    boolean
  >(false);

  const onDragOverBox: (event: any) => void = event => {
    console.log('ASSADASDASDASDASDASDASSDASDAS');
    event.stopPropagation();
    event.preventDefault();
    event.currentTarget.style.visibility = 'hidden';
  };

  const onDragOverDrop: (event: any) => void = event => {
    event.stopPropagation();
    event.preventDefault();
  };

  const onDrop: (event: React.DragEvent<HTMLDivElement>) => void = event => {
    event.preventDefault();
    setGoal(true);
  };

  const onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void = event => {
    event.currentTarget.style.visibility = 'visible';
  };

  const Ball: React.FunctionComponent<IDraggableDiv> = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${football});
    background-repeat: no-repeat;
    background-size: 20px;
    margin-right: 50px;
  `;

  const Goal: React.FunctionComponent<IDraggableDiv> = styled.div`
    width: 300px;
    height: 120px;
    background-image: url(${goalImage});
    background-size: 300px;
    background-repeat: no-repeat;
  `;

  return (
    <>
      {goal && <h1>Scored</h1>}
      {!goal && (
        <Ball
          data-testid='ball'
          draggable
          onDragOver={onDragOverBox}
          onDragEnd={onDragEnd}
        />
      )}
      <Goal data-testid='goal' onDrop={onDrop} onDragOver={onDragOverDrop} />
    </>
  );
};

export { FootBall };
