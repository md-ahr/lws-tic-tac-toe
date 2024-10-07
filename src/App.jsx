/*
  Game
    -> Board
      -> Square
    -> History
*/

import Game from "./components/Game";

export default function App() {
  return (
    <div className="flex justify-center p-4">
      <Game />
    </div>
  );
}
