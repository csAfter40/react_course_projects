import WindowTracker from "./components/WindowTracker"

export default function App() {
    const [displayComponent, setDisplayComponent] = React.useState(true);
    function handleToggle() {
        setDisplayComponent(prevValue => !prevValue)
    }
    return (
        <div className="main">
            <button onClick={handleToggle}>Toggle WindowTracker</button>
            {displayComponent && <WindowTracker />}
        </div>
    )
}