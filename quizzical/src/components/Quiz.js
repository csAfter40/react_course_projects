import React from "react";
import Question from "./Question";

export default function Quiz(){
    return (
        <div className="quiz-container">
            <div className="quiz-questions">
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
            </div>         
            <div className="quiz-button">
                <h2>Check Answers</h2>    
            </div>   
        </div>
    )
}