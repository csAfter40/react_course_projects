import React from "react";
import Showdown from "showdown";    
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

export default function Editor({currentNote, updateNote, deleteNote}) {
    const [value, setValue] = React.useState(currentNote.content)
    const [thisNote, setThisNote] = React.useState(currentNote)
    const [selectedTab, setSelectedTab] = React.useState("write");
    function saveContent(){
        updateNote(thisNote);
    }

    // when user changes the note, note on the editor is saved and swiches to new note
    React.useEffect(() => {
        saveContent();
        setThisNote(currentNote);
        setValue(currentNote.content);
    },[currentNote])

    // updates the note on the editor when value is updated.
    React.useEffect(()=>{
        setThisNote(prevNote => {
            return ({...prevNote, content:value})
        })
    }, [value])
    
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    })

    function handleNoteDelete() {
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