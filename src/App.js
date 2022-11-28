import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";
import Square from "./components/Square";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Player whichPlayer="x" />
      <Player whichPlayer="o" />
      <Board/>
      <Square/>
    </div>
  );
}

export default App;