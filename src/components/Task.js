import React from "react"

export default function Task(props){
    return(
        <div className="Taskdiv">
            <h3>{props.name.slice(0,6)}</h3>
            <p>{props.name}</p>
        </div>
    );
}