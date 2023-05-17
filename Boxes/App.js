import Box from "./components/Box"
import boxes from "./boxes"


export default function App() {
    const [boxList, setBoxList] = React.useState(boxes)
    const boxElements = boxList.map(box => (
        <Box key={box.id} on={box.on} />
    ))
    return (
        <div className="box-container">
            {boxElements}
        </div>
    )
}