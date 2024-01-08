import React from 'react';
import "./Square.css";

const Square = ({ value, onClick }) => {
  const squareStyle = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: '100px',
  };

  return (
    <button className='Square' style={squareStyle} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
