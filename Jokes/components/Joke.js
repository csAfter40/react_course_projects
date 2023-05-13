export default function Joke(props) {
    console.log(props.setup)
    if (props.setup === undefined) {
        return (
            <div className="joke">
                <div className="punchline">
                    <p>{props.punchline}</p>
                </div>
            </div>
        )
    } else if (props.punchline === undefined) {
        return (
            <div className="joke">
                <div className="setup">
                    <p>{props.setup}</p>
                </div>
            </div>
        )
    } else {
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
    
}