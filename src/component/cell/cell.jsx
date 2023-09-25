import React, { useState } from 'react'
import './cell.css';
import evaluate from '../../component/utils/utils';
function Cell(props) {
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState(null);

    const cellClicked = (index) => {
        if (cells[index] !== "") return;
        const newCell = [...cells];
        newCell[index] = props.turn;
        setCells(newCell);
        props.setTurn(props.turn === "X" ? "O" : "X");
        const result = evaluate(newCell);
        if (result) {
            setWinner(result);
            if (result === "X"){
                props.setWins(wins => { return { ...wins, xWins: wins.xWins + 1 } });
        }
            // Just like this example setCount(count => { return count + 1 })
            else if (result === "O")
                props.setWins(wins => { return { ...wins, oWins: wins.oWins + 1 } });

        }


    }
    const reset = () => {
        setWinner(null)
        setCells(Array(9).fill(''));

    }

    return (
        <div className='cells'>
            {cells.map((box, index) =>
                <div key={index}
                    className={`cell ${box}`}
                    onClick={() => { cellClicked(index) }}
                >
                    {box}
                </div>)}

            {
                winner !== null && <div className="result">
                    {winner === 'draw' ? "No One Won" : "Winner is: " + winner}
                    <br /> <button onClick={reset}>Restart!</button>
                </div>
            }
        </div>
    )
}

export default Cell