import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
    width: '300px',
    margin: '20px auto'
  };

  return (
    <div style={boardStyle}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
