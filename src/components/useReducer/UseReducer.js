import { useReducer, useState } from 'react';
import styles from './UseReducer.module.scss';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText };
    case 'toggleShowText':
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const calcReducer = (state, action) => {
  switch (action.type) {
    case 'addition':
      return {
        initialNumber: state.initialNumber + 1,
        calculation: '+',
      };
    case 'subtraction':
      return {
        initialNumber: state.initialNumber + 1,
        calculation: '-',
      };
    case 'multiplication':
      return {
        initialNumber: state.initialNumber * 2,
        calculation: '×',
      };
    case 'division':
      return {
        initialNumber: Math.floor(state.initialNumber / 2),
        calculation: '÷',
      };
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  const [calcState, calcDispatch] = useReducer(calcReducer, {
    initialNumber: 99999999,
    calculation: '',
  });

  return (
    <div>
      <h1>useReducer</h1>

      {/* useReducerの場合 */}
      <div>
        <h3>{state.count}</h3>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch({ type: 'INCREMENT' });
          }}
        >
          increment!
        </Button>
      </div>
      <div>
        <h3>{state.showText && <span>hi!</span>}</h3>
        <Button variant="outlined" onClick={() => dispatch({ type: 'toggleShowText' })}>
          toggle!
        </Button>
      </div>

      <div>
        <h2>{calcState.initialNumber}</h2>
        <h3>{calcState.calculation}</h3>
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          <Button onClick={() => calcDispatch({ type: 'addition' })}>+</Button>
          <Button onClick={() => calcDispatch({ type: 'subtraction' })}>-</Button>
          <Button onClick={() => calcDispatch({ type: 'multiplication' })}>×</Button>
          <Button onClick={() => calcDispatch({ type: 'division' })}>÷</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default UseReducer;
