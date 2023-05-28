import React from "react"

export default function Landing({startQuiz}){
    return (
        <div className="landing-container">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <div onClick={startQuiz} className="landing-button"><h2>Start Quiz</h2></div>
        </div>
    )
}