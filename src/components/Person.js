import React from "react";
import Name from "./Name"


export default function Person(props){
    return (
        <div className="person">
            <h1>Hello World!!</h1>
            <h2>Hello World!!</h2>
            <h3>Hello World!!</h3>
            <p>I am a React Developer {props.surname}<Name name={props.name}/></p>
        </div>
    );
};


