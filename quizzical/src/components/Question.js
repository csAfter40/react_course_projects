import React from "react";
import Choice from "./Choice";
import { shuffleArray } from "../utils";
import he from "he";


export default function Question({question, index, answerQuestion, showResults}){
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
        answerQuestion(question.id);
    }
    return (
        <div className="question-container">
            <h3 className="question-text">{index}. {he.decode(question.question)}</h3>
            <div className="choices-container">
                {choices.map((choice, i) => {
                    return (
                        <Choice
                            key={i}
                            choice={choice}
                            handleChoiceSelection={()=>handleChoiceSelection(choice.text)}
                            showResults={showResults}
                            isCorrectAnswer={choice.text===question.correct_answer}
                        />
                    )
                })}
                
            </div>
            <hr />
        </div>
    )
}