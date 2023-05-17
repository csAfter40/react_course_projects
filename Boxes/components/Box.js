export default function Box(props) {
    const [darkMode, setDarkMode] = React.useState(props.on)
    const styles = {
        backgroundColor: darkMode ? "#222222" : "transparent"
    }
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <div style={styles} className="box" key={props.id} onClick={toggleDarkMode}></div>
    )
}