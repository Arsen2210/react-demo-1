import React from "react"
import Task from "./Task"
import idGenerator from "../Tools"
import NewTask from "./NewTask"

export default class Todo extends React.Component {
    state = {
        tasks: [],
        taskIds: new Set()
    }
    addTask = (inputText) => {
        const tasks = [...this.state.tasks];
        tasks.push({
            id: idGenerator(),
            text: inputText
        });
        this.setState({ tasks });
    }
    removeButtonHandler = (taskId) => () => {
        const newTask = this.state.tasks.filter(({ id }) => taskId !== id);
        const newtaskIds = new Set(this.state.taskIds);
        newtaskIds.delete(taskId);

        this.setState({
            tasks: newTask,
            taskIds: newtaskIds
        });
    }
    handleCheck = (taskId) => () => {
        let taskIds = new Set(this.state.taskIds);
        if (taskIds.has(taskId)) {
            taskIds.delete(taskId)
        }
        else {
            taskIds.add(taskId);
        }
        this.setState({ taskIds })
    }
    removeBulkHandler = () => {
        let { tasks, taskIds } = this.state;
        taskIds.forEach(id => {
            tasks = tasks.filter(task => task.id !== id);
        });
        this.setState({
            tasks,
            taskIds: new Set()
        })
    }
    render() {
        const tasks = this.state.tasks.map(({ id, text }) => {
            return (
                <Task
                    key={id}
                    text={text}
                    onDelete={this.removeButtonHandler(id)}
                    onCheck={this.handleCheck(id)}
                />);
        });
        return (
            <>
                <div>
                    <NewTask
                        onTaskAdd={this.addTask} />
                </div>
                <div className="tasksdiv">
                    {tasks}
                    <button
                        className="buttonRemoveAll"
                        onClick={this.removeBulkHandler}
                        disabled={!this.state.taskIds.size}
                    >Remove All</button>
                </div>

            </>

        );
    }
}