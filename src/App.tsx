import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/counter/counterSlice';

function App() {
  const count = useSelector((state: any) => {
    console.log(state);
    return state.counter.value;
  });
  const dispatch = useDispatch()
  return (
    <div>
      <h3>React-Redux</h3>
      <div>
        Result : {count}
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
