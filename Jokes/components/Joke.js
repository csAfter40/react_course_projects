export default function Joke(props) {
    return (
        <div className="joke">
            {props.setup && <div className="setup">
                <p>{props.setup}</p>
            </div>}
            {props.punchline && <div className="punchline">
                <p>{props.punchline}</p>
            </div>}
        </div>
    )   
}