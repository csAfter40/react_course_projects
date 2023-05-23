import React from "react";

export default function Sidebar(props) {

    function getNoteTitle(note) {
        // returns the first line of the content of the given note
        const firstLine = note.content;
        return firstLine.split("\n")[0];
    }

    function handleNoteSelect(event) {
        const id = event.target.dataset.id;
        const currentNote = props.notes.find(element => element.id === id);
        props.setCurrentNote(currentNote);
    }
    return (
        <div className="sidebar">
            <header className="sidebar-header">
                <h2>Notes</h2>
                <button onClick={props.addNote}>+</button>
            </header>
            <div className="sidebar-notes">
                {props.notes.map((note, i) => {
                    return (
                        <h3 
                            onClick={handleNoteSelect} 
                            key={i} 
                            data-id={note.id} 
                            className={"sidebar-notes-note".concat(note.id === props.currentNote.id ? " selected" : "")}
                        >
                            {getNoteTitle(note)}
                        </h3>
                    )
                })}                
            </div>
        </div>
    )
}