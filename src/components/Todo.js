import React from "react"
// import { render } from "@testing-library/react"
import Task from "./Task"
import idGenerator from "../Tools"

export default class Todo extends React.Component {
    state = {
        inputText:"",
        tasks: []
    }
    inputChangeHandler = (event) => {
        const value = event.target.value;
        this.setState({ inputText: value })
    }
    buttonClickhandler = () => {
        const inputText = this.state.inputText;
        if (!inputText) return;
        const tasks = [...this.state.tasks];
        tasks.push({
            id:idGenerator(),
            text:inputText
        });
        this.setState({ tasks, inputText: "" })
    }
    render() {
        const tasks = this.state.tasks.map(task => <Task key={task.id} name={task.text} />);

        return (
            <>
                <div>
                    <input type="text"
                        value={this.state.inputText}
                        onChange={this.inputChangeHandler} />
                    <button onClick={this.buttonClickhandler}>Add</button>
                </div>
                <div className="tasksdiv">
                    {tasks}
                </div>

            </>

        );
    }
}