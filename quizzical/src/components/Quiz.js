import React from "react";
import Question from "./Question";

export default function Quiz({questions}){
    console.log(questions);
    return (
        <div className="quiz-container">
            <div className="quiz-questions">
                {questions.map((question, i) => {
                    return (
                        <Question 
                            key={i}
                            index={i+1}
                            question={question}
                        />
                    )
                })}
            </div>         
            <div className="quiz-button">
                <h2>Check Answers</h2>    
            </div>   
        </div>
    )
}