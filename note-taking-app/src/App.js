import Split from  "react-split";
import Landing from './components/Landing';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import React from 'react';
import { nanoid } from "nanoid"

function App() {

  const [notes, setNotes] = React.useState([])
  const [currentNote, setCurrentNote] = React.useState(notes.length > 0 ? notes[0] : {})

  function addNote() {
    const id = nanoid();
    const newNote = {id:id, content:""};
    setNotes((prevnotes) => {
      return (
        [newNote, ...prevnotes]
        )
      })
    setCurrentNote(newNote);
  }

  function updateNote(updatedNote) {
    const newNotes = notes.map((note) => {
      return (updatedNote.id === note.id) ? updatedNote : note
    });
    setNotes(newNotes);
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
          <Editor
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            updateNote={updateNote}
          />
        </Split>
        :
        <Landing
          addNote={addNote} 
        />
      }
      
    </div>
  );
}

export default App;
