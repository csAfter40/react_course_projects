import React from "react";
import Choice from "./Choice";

export default function Question(){
    return (
        <div className="question-container">
            <h3 className="question-text">Question text</h3>
            <div className="choices-container">
                <Choice/>
                <Choice/>
                <Choice/>
                <Choice/>
            </div>
            <hr />
        </div>
    )
}