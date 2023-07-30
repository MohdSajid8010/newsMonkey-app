import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
        console.log("inside componentWillUnmount")
    }
    render() {
        return (
            <div>
                <h1>Hello World </h1>
                <h3>it is {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}