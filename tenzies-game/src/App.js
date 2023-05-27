import Die from "./components/Die";
import { allNewDice } from "./utils";
import React from "react";

function App() {
  const [diceArray, setDiceArray] = React.useState(allNewDice(10))

  function handleRoll(){
    setDiceArray(allNewDice(10));
  }

  function handleDieClick(event){
    const id = event.currentTarget.dataset.id;
    setDiceArray((prevDiceArray) => {
      const newDiceArray = prevDiceArray.map((die) => {
        return (
          die.id === id ? {...die, isHeld:!die.isHeld} : die
        )
      })
      return newDiceArray;
    })
  }

  return (
    <main className="main-frame">
      <div className='main-container'>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceArray.map((die, i) => {
            return (<Die 
              key={die.id} 
              die={die}
              handleDieClick={handleDieClick}
            />)
          })}
        </div>
        <button onClick={handleRoll} className="roll-button">Roll</button>
      </div>
    </main>
  );
}

export default App;
