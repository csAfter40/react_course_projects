import React from "react";
import Choice from "./Choice";
import { shuffleArray } from "../utils";


export default function Question({question, index}){
    const [choices, setChoices] = React.useState([])

    React.useEffect(()=>{
        let choicesArray = [
            ...question.incorrect_answers, 
            question.correct_answer
        ]
        shuffleArray(choicesArray);
        setChoices(
            choicesArray.map((choice) => {
                return (
                    {
                        text: choice,
                        isSelected: false
                    }
                )
            })
        )
    },[])

    function handleChoiceSelection(text){
        setChoices((prevChoices) => {
            const newChoices = prevChoices.map((choice)=>{
                return (
                    choice.text === text ? 
                    {...choice, isSelected:true} :
                    {...choice, isSelected:false}
                )
            })
            return newChoices
        })
    }
    
    return (
        <div className="question-container">
            <h3 className="question-text">{index}. {question.question}</h3>
            <div className="choices-container">
                {choices.map((choice, i) => {
                    return (
                        <Choice
                            key={i}
                            choice={choice}
                            handleChoiceSelection={()=>handleChoiceSelection(choice.text)}
                        />
                    )
                })}
                
            </div>
            <hr />
        </div>
    )
}