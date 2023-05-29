import Landing from "./components/Landing";
import Quiz from "./components/Quiz";
import React from "react";
import {nanoid} from "nanoid";
import {RotatingLines} from "react-loader-spinner";

function App() {
  const [isLanding, setIsLanding] = React.useState(true);
  const [questions, setQuestions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  async function startQuiz() {
    setIsLoading(true)
    setIsLanding(false);
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple");
    const data = await response.json();
    const questionArray = data.results.map((item)=>{
      return {...item, isAnswered:false, id:nanoid()}
    })
    setIsLoading(false);
    setQuestions(questionArray);
  }

  return (
    <div className="App">
      {isLanding ? 
        <Landing 
          startQuiz={startQuiz}
        /> :
        <>
          <div className="loader-container" style={{display: isLoading ? "flex" : "none"}}>
            <RotatingLines 
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={isLoading}
            />
          </div>
          <Quiz 
            questions={questions}
            setQuestions={setQuestions}
            startQuiz={startQuiz}
          />
        </>
      }
    </div>
  );
}

export default App;
