import Landing from "./components/Landing";
import Quiz from "./components/Quiz";
import React from "react";

function App() {
const [isLanding, setIsLanding] = React.useState(false);
const [questions, setQuestions] = React.useState([]);


  return (
    <div className="App">
      {isLanding ? 
        <Landing /> :
        <Quiz 
          questions={questions}
        />
      }
    </div>
  );
}

export default App;
