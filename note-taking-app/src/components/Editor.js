import React from "react";
import Showdown from "showdown";    
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

export default function Editor({currentNote, updateNote, deleteNote}) {
    const [value, setValue] = React.useState(currentNote.content)
    const [thisNote, setThisNote] = React.useState(currentNote)
    const [selectedTab, setSelectedTab] = React.useState("write");
    const [deleteActive, setDeleteActive] = React.useState(false);
    const [hasUpdated, setHasUpdated] = React.useState(false);
    function saveContent(){
        thisNote.hasOwnProperty("content") && updateNote(thisNote);
        setHasUpdated(false);
    }

    React.useEffect(() => {
        setHasUpdated(false);
    }, [])

    // when user changes the note, note on the editor is saved and swiches to new note
    React.useEffect(() => {
        !deleteActive && hasUpdated && saveContent(); // don't call saveContent if effect called due to note delete
        setHasUpdated(false); //TODO!
        setDeleteActive(false);
        setThisNote(currentNote);
        setValue(currentNote.content);
    },[currentNote])

    // updates the note on the editor when value is updated.
    React.useEffect(()=>{
        value && setThisNote(prevNote => {
            return ({...prevNote, content:value})
        });
        value != currentNote.content && setHasUpdated(true);
    }, [value])
    
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    })

    function handleNoteDelete() {
        setDeleteActive(true);
        deleteNote(thisNote);
    }

    return (
        <div className="editor">
            <ReactMde
                value={value}
                onChange={setValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
            />
            <div className="editor-button-container">
                <button onClick={handleNoteDelete}>Delete</button>
                <button onClick={saveContent}>Save Note</button>
            </div>
        </div>
    )
}