export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleSetup() {
        setIsShown(prevValue => !prevValue)
    }
    return (
        <div className="joke">
            <button className="show-hide-button" onClick={toggleSetup}>
                {isShown ? "Hide Punchline" : "Show Punchline"}
            </button>
            {props.setup && <div className="setup">
                <p>{props.setup}</p>
            </div>}
            {isShown && <div className="punchline">
                <p>{props.punchline}</p>
            </div>}
        </div> 
    )   
}