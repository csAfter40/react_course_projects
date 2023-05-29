import React from "react";
import he from "he";

export default function Choice({choice, handleChoiceSelection, showResults, isCorrectAnswer}) {
    return (
        <>
            {
                showResults ? 
                (<div 
                    className={isCorrectAnswer ? 
                        "choice-button correct": 
                        choice.isSelected ? 
                            "choice-button wrong": 
                            "choice-button inactive"
                    }
                >
                    <h3>{he.decode(choice.text)}</h3>
                </div>) :
                (<div 
                    onClick={handleChoiceSelection} 
                    className={choice.isSelected ? "choice-button selected": "choice-button"}
                >
                    <h3>{he.decode(choice.text)}</h3>
                </div>) 
            }
        </>
    )
}