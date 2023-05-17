export default function Box(props) {
    console.log("box created")
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    return (
        <div style={styles} className="box" key={props.id} onClick={props.toggle} id={props.id}></div>
    )
}