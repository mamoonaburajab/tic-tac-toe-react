import './App.css';
import Header from './component/header/header'
import Cell from './component/cell/cell'
import { useState } from 'react';

function App() {
  const [turn, setTurn] = useState("X");
  const [wins, setWins] = useState({xWins : 0, oWins: 0});
  return (
    <div className="App">
      <Header turn={turn} wins={wins} setWins={setWins} />
      <Cell setTurn={setTurn} turn={turn}  setWins={setWins} />
    </div>
  );
}

export default App;
