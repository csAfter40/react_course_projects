import React from "react"

export default function Choice({choice, handleChoiceSelection}) {
    return (
        <div 
            onClick={handleChoiceSelection} 
            className={choice.isSelected ? "choice-button selected": "choice-button"}
        >
            <h3>{choice.text}</h3>
        </div>
    )
}