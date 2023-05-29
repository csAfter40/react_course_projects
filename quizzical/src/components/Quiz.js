import React from "react";
import Question from "./Question";

export default function Quiz({questions, setQuestions, startQuiz, isLoading}){
    const [isFinished, setIsFinished] = React.useState(false);
    const [showResults, setShowResults] = React.useState(false);
    const [score, setScore] = React.useState(0);

    React.useEffect(()=>{
        questions.length && questions.every(question=>question.isAnswered) ? setIsFinished(true) : setIsFinished(false)
    },[questions])
    function answerQuestion(id, choice){
        setQuestions((prevQuestions)=>{
            const newQuestions = prevQuestions.map((question)=>{
                return question.id === id ? {...question, isAnswered:true, answered:choice} : question
            })
            return newQuestions
        })
    }
    function handleCheckAnswers(){
        isFinished && setShowResults(true);
        questions.forEach((question) => {
            question.answered === question.correct_answer && setScore(prevScore => prevScore+1)
        })
    }

    function handleStartNew(){
        setIsFinished(false);
        setShowResults(false);
        setScore(0);
        startQuiz();
    }

    return (
        <div className="quiz-container" style={{display: isLoading && "none"}}>
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
                (<>
                    <h2 className="results-text">You scored {score}/{questions.length} correct answers</h2>
                    <div 
                        className="quiz-button"
                        onClick={handleStartNew}
                        >
                        <h2>Start New Quiz</h2>    
                    </div>
                </>) :
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