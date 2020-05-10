import React from "react"
// import { render } from "@testing-library/react";
import Data from "./Data";
let inputValue
export default class Input extends React.Component{
    constructor(){
        super();
        this.state={
            inputText:""
        }
    }
    render(){
        return(
            <div>
                <input type="text" 
                onChange={(event)=>{
                    this.setState({inputText:event.target.value});
                }}
                />
                <button onClick={()=>{
                    inputValue=this.state.inputText
                    this.setState({inputText:""})
                }}>Button</button>
                <Data value={inputValue}/>
            </div>

        );
            
    }
}