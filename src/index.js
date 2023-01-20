import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Square = (props) => {
  
  return (
    <button 
    className="square"
    onClick={props.onClickEvent}
    >
      {props.value}
    </button>
  );
}

const Boardarea = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setxIsNext] = useState(true);

  const handleClickEvent = (i) => {
    
    // make a copy of squares state array
    const newSquares = [...squares];
    // mutate the copy and set the i-th element to X
    newSquares[i] = xIsNext ? 'X' : '0';
    // call the setSquares function with the mutated copy
    setSquares(newSquares);
    setxIsNext(!xIsNext);
  }

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]}
       onClickEvent={() => handleClickEvent(i)}
      />
      );
    };

    const status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
      <div className="board"
      >
        <div className="status">{status}</div>
        <div className="board-row">
        {renderSquare(1)}{renderSquare(2)}{renderSquare(3)}
        </div>
        <div className="board-row">
        {renderSquare(4)}{renderSquare(5)}{renderSquare(6)}
        </div>
        <div className="board-row">
        {renderSquare(7)}{renderSquare(8)}{renderSquare(9)}
        </div>
      </div>
  );
;}


const Gamebuild = () => {
  return (
    <div className="game">
      Tic-Tac-Toe
      <Boardarea />
    </div>
  );
};

ReactDOM.render(<Gamebuild />, document.getElementById('root'));


function calculateWinner(square) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
}