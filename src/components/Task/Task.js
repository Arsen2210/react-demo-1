import React from "react";
import classes from "./task.css";
export default function Task(props){
    const {text} = props
    return(
        <div className={classes.taskDiv} >
            <input 
            type="checkbox"
            onChange={props.onCheck}
            />
            <h3>{text.slice(0,6)}</h3>
            <p>{text}<button className={classes.delButton} onClick={props.onDelete}>Del</button></p>
        </div>
    );
}