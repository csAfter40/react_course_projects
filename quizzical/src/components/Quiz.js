import React from "react";
import Question from "./Question";

export default function Quiz({questions, setQuestions, startQuiz}){
    const [isFinished, setIsFinished] = React.useState(false);
    const [showResults, setShowResults] = React.useState(false);

    React.useEffect(()=>{
        questions.length && questions.every(question=>question.isAnswered) ? setIsFinished(true) : setIsFinished(false)
    },[questions])
    function answerQuestion(id){
        setQuestions((prevQuestions)=>{
            const newQuestions = prevQuestions.map((question)=>{
                return question.id === id ? {...question, isAnswered:true} : question
            })
            return newQuestions
        })
    }
    function handleCheckAnswers(){
        isFinished && setShowResults(true);
    }

    function handleStartNew(){
        setIsFinished(false);
        setShowResults(false);
        startQuiz();
    }
    
    return (
        <div className="quiz-container">
            <div className="quiz-questions">
                {questions.map((question, i) => {
                    return (
                        <Question 
                            key={question.id}
                            index={i+1}
                            question={question}
                            answerQuestion={answerQuestion}
                            showResults={showResults}
                        />
                    )
                })}
            </div>   
            {showResults?
                (<div 
                    className="quiz-button"
                    onClick={handleStartNew}
                >
                    <h2>Start New Quiz</h2>    
                </div>) :
                (<div 
                    className={isFinished ? "quiz-button" : "quiz-button disabled"}
                    onClick={handleCheckAnswers}
                >
                    <h2>Check Answers</h2>    
                </div>)
            } 
        </div>
    )
}