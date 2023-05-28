import {nanoid} from "nanoid"

function getNewDie() {
    return {
        id: nanoid(),
        value: Math.ceil(Math.random()*6),
        isHeld: false
    }
}

function allNewDice(count){
    let diceArray = []
    for (let i=0; i<count; i++){
        diceArray.push(getNewDie())
    }
    return diceArray
}


export {allNewDice, getNewDie}