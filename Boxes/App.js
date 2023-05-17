import Box from "./components/Box"
import boxes from "./boxes"


export default function App() {
    
    function toggle(event) {
        const id = event.target.id;
        setBoxList(prevList => prevList.map(box => (
            box.id==id ? {id:box.id, on:!box.on} : box
        )))
    }

    const [boxList, setBoxList] = React.useState(boxes)
    let boxElements = boxList.map(box => (
        <Box key={box.id} on={box.on} toggle={toggle} id={box.id} />
    ))
    return (
        <div className="box-container">
            {boxElements}
        </div>
    )
}