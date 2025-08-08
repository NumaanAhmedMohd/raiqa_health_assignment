import React from 'react';

interface ListViewProps {
  numbers: number[];
  onDelete: (index: number) => void;
  onReset: () => void;
  onSort: () => void;
}

const ListView: React.FC<ListViewProps> = ({ numbers, onDelete, onReset, onSort }) => {
  return (
    <div className="list-card">
      <h3>Numbers List</h3>
      <div className="list-buttons">
        <button className="reset" onClick={onReset}>Reset</button>
        <button className="sort" onClick={onSort}>Sort ⬆️</button>
      </div>
      <ul>
        {numbers.map((num, idx) => (
          <li key={idx}>
            {num} <span className="index">#{idx + 1}</span>
            <button className="delete" onClick={() => onDelete(idx)}>X</button>
          </li>
        ))}
      </ul>
      <p className="total">Total numbers: {numbers.length}</p>
    </div>
  );
};

export default ListView;
