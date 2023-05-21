import React from "react";

export default function Sidebar(props) {
    function handleNoteSelect(event) {
        props.setCurrentNote(event.target.dataset.id)
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
                            className={"sidebar-notes-note".concat(note.id === props.currentNote ? " selected" : "")}
                        >
                            {`Note ${i+1}`}
                        </h3>
                    )
                })}                
            </div>
        </div>
    )
}