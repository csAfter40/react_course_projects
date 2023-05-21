import Split from  "react-split";
import Landing from './components/Landing';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import { useState } from 'react';
import storedNotes from './notes';

function App() {

  const [notes, setNotes] = useState(storedNotes)
  const [currentNote, setCurrentNote] = useState(notes ? notes[0].id : "")
  console.log(notes, currentNote)
  function addNote() {
    setNotes((prevnotes) => {
      const newNote = {id:(notes.length+1).toString(), content:""}
      return (
        [newNote, ...prevnotes]
      )
    })
  }
  return (
    <div className="App">
      {notes.length > 0 ? 
        <Split
        sizes={[25, 75]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        className='split'
        >
          <Sidebar 
            notes={notes}
            addNote={addNote}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
          />
          <Editor/>
        </Split>
        :
        <Landing />
      }
      
    </div>
  );
}

export default App;
