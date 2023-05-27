import Split from  "react-split";
import Landing from './components/Landing';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import React from 'react';
import { onSnapshot, addDoc, deleteDoc, updateDoc, doc, getDocs, getDoc, collection } from "firebase/firestore"
import { notesCollection, db } from "./firebase";

function App() {

  const [notes, setNotes] = React.useState([])
  const [currentNote, setCurrentNote] = React.useState({})

  React.useEffect(()=>{
    const unsubscribe = onSnapshot(notesCollection, function(snapshot) {
      const notesArray = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setNotes(notesArray);
      !Object.keys(currentNote).length && notesArray.length && setCurrentNote(notesArray[0]);
    })
    return unsubscribe
  }, [])
  
  async function addNote() {
    const newNote = {
      content:"# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    const newNoteRef = await addDoc(notesCollection, newNote);
    const currentNoteRef = {...newNote, id: newNoteRef.id};
    setCurrentNote(currentNoteRef);
  }

  async function updateNote(updatedNote) {
    const docRef = doc(db, "notes", updatedNote.id);
    const docSnap = await getDoc(docRef);
    docSnap.exists() && await updateDoc(docRef, {
      content: updatedNote.content,
      updatedAt: Date.now()
    });
  }
  
  async function deleteNote(deletedNote) {
    const docRef = doc(db, "notes", deletedNote.id);
    await deleteDoc(docRef);
    const notesRef = await getDocs(notesCollection);
    const notesArray = notesRef.docs.map((doc) => (
      {...doc.data(), id: doc.id}
    ))
    notesArray.length && setCurrentNote(notesArray[0]);
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
            deleteNote={deleteNote}
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
