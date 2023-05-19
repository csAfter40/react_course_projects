export default function WindowTracker(props) {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function setWindowWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", setWindowWidth)
        return function () {
            window.removeEventListener("resize", setWindowWidth)
        };
    }, [])
    return (
        <h2>Window width: {width}</h2>
    )
}