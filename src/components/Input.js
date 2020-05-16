import React from "react"
// import { render } from "@testing-library/react";
import Data from "./Data";

export default class Input extends React.Component {
    state = {
        text: " ",
        inputText: ""

    }
    inputChangeHandler = (event) => {
        const value = event.target.value;
        this.setState({ inputText: value })
    }
    buttonClickhandler = () => {
        if (this.state.inputText) {
            this.setState({
                text: this.state.inputText,
                inputText: ""
            })
        }
    }
        render() {
            return (
                <div>
                    <input type="text"
                        value={this.state.inputText}
                        onChange={this.inputChangeHandler} />
                    <button
                        onClick={this.buttonClickhandler}
                    >Button</button>
                    <Data text={this.state.text} />
                </div>
            );
        }
    }
