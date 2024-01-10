// import React, { useState } from 'react';
// import Board from './components/Board';

// const Game = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

//   const handleClick = (index) => {
//     const newBoard = [...board];
//     if (calculateWinner(newBoard) || newBoard[index]) return;
//     newBoard[index] = xIsNext ? 'X' : 'O';
//     setBoard(newBoard);
//     setXIsNext(!xIsNext);
//   };

//   const calculateWinner = (squares) => {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//           return { winner: squares[a], line: lines[i] };
//         }
//       }
//       return null;
//   };

//   const lineStyle = {
//     position: 'absolute',
//     /* Other styles based on the winning line (width, height, rotation, etc.) */
//   };
  

//   const winner = calculateWinner(board);

//   const gameStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: '20px',
//   };

//   const infoStyle = {
//     marginTop: '10px',
//   };

//   return (
//     <div style={gameStyle}>
//       <Board squares={board} onClick={handleClick} />
//       <div style={infoStyle}>
//         <p>{winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}</p>
//         {/* Reset button or other controls */}
//       </div>
//     </div>
//   );
// };

// export default Game;
import React from 'react';

const DevelopmentPage = () => {
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',  // Adjust the height as per your layout needs
    backgroundColor: '#121212', // Background color
    color: '#FFF', // Text color
    fontSize: '24px', // Adjust font size as needed
    fontFamily: 'Arial, sans-serif', // Choose your preferred font
  };

  return (
    <div style={pageStyle}>
      <p>This page is in development. Stay tuned for updates!</p>
    </div>
  );
};

export default DevelopmentPage;
