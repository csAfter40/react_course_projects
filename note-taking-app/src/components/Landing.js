import React from "react";

export default function Landing(props) {
    return (
        <div className="landing-container">
            <h1>You have no notes</h1>
            <button onClick={props.addNote}>Create one now</button>
        </div>
    )
}