import React from "react"

export default function Die({die, handleFlip}) {
    return (
        <div 
            onClick={handleFlip} 
            className={die.isHeld ? "dice held": "dice"}
            data-id={die.id}
        >
            <i className={`bi bi-dice-${die.value}`}></i>
        </div>
    )
}