import Landing from "./components/Landing";
import Quiz from "./components/Quiz";
import React from "react";

function App() {
const [isLanding, setIsLanding] = React.useState(true);
const [questions, setQuestions] = React.useState([]);

function startQuiz() {
  setIsLanding(false);
  fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
    .then(response => response.json())
    .then(data => setQuestions(data.results))
}

  return (
    <div className="App">
      {isLanding ? 
        <Landing 
          startQuiz={startQuiz}
        /> :
        <Quiz 
          questions={questions}
        />
      }
    </div>
  );
}

export default App;
