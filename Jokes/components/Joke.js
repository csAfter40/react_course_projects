export default function Joke(props) {
    return (
        <div className="joke">
            <div className="setup">
                <p>{props.setup}</p>
            </div>
            <div className="punchline">
                <p>{props.punchline}</p>
            </div>
        </div>
    )
}