import React from "react"

export default function Die({die, handleDieClick}) {
    return (
        <div 
            onClick={handleDieClick} 
            className={die.isHeld ? "dice held": "dice"}
            data-id={die.id}
        >
            <h3>{die.value}</h3>
        </div>
    )
}