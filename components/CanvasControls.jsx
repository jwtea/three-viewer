import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};

  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 3px 4px 0 rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.white};

  text-transform: uppercase;
  text-decoration: none;

  cursor: pointer;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => dispatch({ type: 'NEXT_ITEM' })} type="button">
        Next Item
      </Button>
      <Button onClick={() => dispatch({ type: 'TOGGLE_LIGHTS' })} type="button">
        Lights
      </Button>
      <Button
        onClick={() => dispatch({ type: 'TOGGLE_EFFECTS' })}
        type="button"
      >
        Effects
      </Button>
      <Button
        onClick={() => dispatch({ type: 'TOGGLE_BACKGROUND' })}
        type="button"
      >
        Background
      </Button>
    </>
  );
};
