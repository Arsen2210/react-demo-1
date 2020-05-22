import React from "react"

export default class NewTask extends React.Component{
    state={
        inputText: ""
    }
    inputChangeHandler=(event)=>{
        this.setState({inputText:event.target.value});
    }
    buttonClickhandler=()=>{
        const {inputText}=this.state;
        if (!inputText) return;
        this.props.onTaskAdd(inputText);
        this.setState({inputText:" "});
    }
    render() {
        return (
            <>
                <input type="text"
                    value={this.state.inputText}
                    onChange={this.inputChangeHandler} />
                <button onClick={this.buttonClickhandler}>Add</button>
            </>
        );
    }

}