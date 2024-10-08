export default function History({ history, jumpTo }) {
  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = `Go to the move #${move}`;
    } else {
      description = "Go to start the game";
    }

    return (
      <li key={move} className="bg-gray-700 text-white mb-1 p-1 rounded">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return <ol className="border border-gray-400 p-1 text-lg">{moves}</ol>;
}
