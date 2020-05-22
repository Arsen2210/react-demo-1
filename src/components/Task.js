import React from "react"

export default function Task(props){
    const {text} = props
    return(
        <div className="Taskdiv" >
            <input 
            type="checkbox"
            onChange={props.onCheck}
            />
            <h3>{text.slice(0,6)}</h3>
            <p>{text}<button className="delbutton" onClick={props.onDelete}>Del</button></p>
        </div>
    );
}