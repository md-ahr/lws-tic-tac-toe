import { calculateWinner } from "../lib/calculateWinner";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);

  let status;

  const isDraw = squares?.every((square) => square !== null);

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Draw!";
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const nextSquares = squares?.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  };

  return (
    <>
      <div>{status}</div>
      <div className="grid grid-cols-3">
        {squares?.map((square, index) => (
          <Square
            key={index}
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
}
