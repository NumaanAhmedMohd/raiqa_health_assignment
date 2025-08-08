import React from 'react';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAdd: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement, onAdd }) => {
  return (
    <div className="card">
      <h2>Counter</h2>
      <div className="counter-controls">
        <button onClick={onDecrement}>−</button>
        <span className="count">{count}</span>
        <button onClick={onIncrement}>+</button>
      </div>
      <button className="add-button" onClick={onAdd}>Add to List</button>
    </div>
  );
};

export default Counter;
