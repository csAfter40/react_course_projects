import Die from "./components/Die";
import { allNewDice, getNewDie } from "./utils";
import React from "react";
import Confetti from "react-confetti"

function App() {
  const [diceArray, setDiceArray] = React.useState(allNewDice(10))
  const [tenzies, setTenzies] = React.useState(false);

  // React.useEffect(() => {
  //   tenzies && console.log("you won!")
  // }, [tenzies])

  React.useEffect(()=>{
    const won = diceArray.every((die) => {
      return die.isHeld && die.value === diceArray[0].value;
    })
    won && setTenzies(true);
  }, [diceArray])

  function handleNewGame(){
    setDiceArray(allNewDice(10));
    setTenzies(false)
  }

  function handleRoll(){
    setDiceArray((prevDiceArray) => {
      const newDiceArray = prevDiceArray.map((die) => {
        return (
          die.isHeld ? die : getNewDie()
        )
      })
      return newDiceArray;
    });
  }

  function handleButton(){
    tenzies ? handleNewGame() : handleRoll()
  }

  function handleFlip(id){
    !tenzies && setDiceArray((prevDiceArray) => {
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
              handleFlip={() => handleFlip(die.id)}
            />)
          })}
        </div>
        <button onClick={handleButton} className="roll-button">{tenzies ? "New Game": "Roll"}</button>
      </div>
      {tenzies && <Confetti/>}
    </main>
  );
}

export default App;
