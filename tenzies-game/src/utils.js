import {nanoid} from "nanoid"

function allNewDice(count){
    let diceArray = []
    for (let i=0; i<count; i++){
        const value = Math.ceil(Math.random()*6)
        diceArray.push({
            value: value,
            isHeld: false,
            id: nanoid()
        })
    }
    return diceArray
}

export {allNewDice}