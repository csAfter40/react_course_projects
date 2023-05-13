import Joke from "./components/Joke";
import { jokes } from "./jokes";


export default function App() {
    return (
        <div className="main">
            <h1>Daddy Jokes</h1>
            <div className="joke-container">
                {jokes.map(joke => {
                    return (
                        <Joke 
                            setup={joke.setup}
                            punchline={joke.punchline}
                        />
                    )
                })}
            </div>
        </div>
    )
}