import * as React from 'react';
import styled from '@emotion/styled';

interface IInputProps {
  onClick: (inputText: string) => void;
}

interface IInputBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  alt: string;
}

interface IButtonProps {
  onClick: (event: React.MouseEvent) => void;
  'data-testid': string;
}

const InputWrapper: React.FunctionComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox: React.FunctionComponent<IInputBoxProps> = styled.input`
  font-size: 30px;
  grid-row: 3;
  grid-column: 2;
  height: 60px;
  border: 4px solid lightgreen;
  text-align: center;
`;

const Button: React.FunctionComponent<IButtonProps> = styled.button`
  height: 70px;
  border: 4px solid lightgreen;
  background-color: lightgreen;
  font-size: 30px;
  margin-left: 5px;
`;

const Input: React.FunctionComponent<IInputProps> = props => {
  const [inputText, setInputText]: [
    string,
    React.Dispatch<string>
  ] = React.useState<string>('');

  const onClick: (event: React.MouseEvent) => void = _ => {
    props.onClick(inputText);
  };

  const onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = event => {
    setInputText(event.currentTarget.value);
  };

  return (
    <InputWrapper>
      <InputBox alt='input' onChange={onChange} />
      <Button data-testid='inputButton' onClick={onClick}>
        OK
      </Button>
    </InputWrapper>
  );
};

export { Input };
