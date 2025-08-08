// src/App.tsx
import React, { useState } from 'react';
import Counter from './components/Counter';
import ListView from './components/ListView';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);
  const handleAdd = () => setNumbers(prev => [count, ...prev]);
  const handleReset = () => setNumbers([]);
  const handleSort = () => setNumbers(prev => [...prev].sort((a, b) => a - b));
  const handleDelete = (index: number) =>
    setNumbers(prev => prev.filter((_, i) => i !== index));

  return (
    <div className="app">
      <h2 style={{ color: '#555', marginBottom: '5px' }}>RAIQA HEALTH Assignment</h2>
      <h1>Counter & List App</h1>
      <Counter
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onAdd={handleAdd}
      />
      <ListView
        numbers={numbers}
        onDelete={handleDelete}
        onReset={handleReset}
        onSort={handleSort}
      />
    </div>
  );
};

export default App;


